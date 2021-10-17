import React,{useEffect, useState} from 'react';
import axios from 'axios';
import ScoopOption from "./ScoopOption";
import ToppingOption from "./ToppingOption";
import {Row} from "react-bootstrap";
import AlertBanner from "../common/AlertBanner";

export interface OptionsProps{
    optionType:string;
}
export interface IItem{
    name:string;
    imagePath:string;
}
const Options:React.FC<OptionsProps>=({optionType})=> {

    const [items, setItems]=useState<IItem[]>([]);
    const [error, setError] = useState(false);

    //optionType is 'scoops' or 'toppings'
    useEffect(() => {
       axios.get(`http://localhost:3030/${optionType}`)
           .then(response=>setItems(response.data))
           .catch(error=>{
               setError(true);
           })
    }, [optionType]);

    //
    if(error){
        return <AlertBanner message={'An unexpected error occurred. Please try again later.'} variant={'danger'}/>;
    }
    const ItemComponent = optionType==='scoops'? ScoopOption : ToppingOption;

    const optionItems = items.map(item=>(<ItemComponent key={item.name}
                                                        name={item.name}
                                                        imagePath={item.imagePath}/>))
    return (
        <Row>{optionItems}</Row>
    );
}

export default Options;
