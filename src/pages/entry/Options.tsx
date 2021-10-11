import React,{useEffect, useState} from 'react';
import axios from 'axios';
import ScoopOption from "./ScoopOption";
import ToppingOption from "./ToppingOption";
import {Row} from "react-bootstrap";

export interface OptionsProps{
    optionType:string;
}
export interface IItem{
    name:string;
    imagePath:string;
}
const Options:React.FC<OptionsProps>=({optionType})=> {

    const [items, setItems]=useState<IItem[]>([])
    //optionType is 'scoops' or 'toppings'
    useEffect(() => {
       axios.get(`http://localhost:3030/${optionType}`)
           .then(response=>setItems(response.data))
           .catch(error=>console.log(error))
    }, [optionType]);

    //
    const ItemComponent = optionType==='scoops'? ScoopOption : ToppingOption;

    const optionItems = items.map(item=>(<ItemComponent key={item.name}
                                                        name={item.name}
                                                        imagePath={item.imagePath}/>))
    return (
        <Row>{optionItems}</Row>
    );
}

export default Options;
