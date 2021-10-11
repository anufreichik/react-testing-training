import React from 'react';
import {Col} from "react-bootstrap";

function ScoopOption({name, imagePath}) {
    return (
        <Col xs={12} sm={6} md={4} lg={3} style={{textAlign: 'center'}}>
            <img scr={`http://localhost:3030/${imagePath}`}
                 style={{width:'75%'}}
                 alt={`${name} scoop`}/>
        </Col>
    );
}

export default ScoopOption;
