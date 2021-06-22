import React from 'react';
import Accordion from '../Accordion/Accordion';

export default function RenderRemittance({remittance}) {
    return (
        // this component maps out the 
        // array nested inside the json data
        // for remittance keys
        <div>
            {remittance.map((r) => (
                <Accordion r={r}/>
            ))}
        </div>
    )
}