import React from 'react';
import RemittancesTable from '../RemittancesTable/RemittancesTable';

export default function RenderRemittance({remittance}) {
    return (
        // this component maps out the 
        // array nested inside the json data
        // for remittance keys
        <div>
            {remittance.map((r) => (
                <RemittancesTable r={r}/>
            ))}
        </div>
    )
}