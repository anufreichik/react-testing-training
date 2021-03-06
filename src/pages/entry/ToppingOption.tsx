import React from 'react';
import {Col} from "react-bootstrap";

interface IProps{
    name:string;
    imagePath:string;
}
const ToppingOption:React.FC<IProps>=({name, imagePath}) =>{
    return (
        <Col xs={12} sm={6} md={4} lg={3} style={{textAlign: 'center'}}>
          <img src={`http://localhost:3030/${imagePath}`}
               alt={`${name} topping`}
               style={{width:'75%'}}
          />
        </Col>
    );
}

export default ToppingOption;
