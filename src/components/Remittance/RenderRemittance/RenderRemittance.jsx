import React from 'react';

export default function RenderRemittance({remittance}) {
    return (
        // this component maps out the 
        // array nested inside the json data
        // for remittance keys
        <div>
            {remittance.map((r) => (
                <ul>
                   <li>
                    Payor: {r.PayorName}
                    </li>
                    <li>
                    Payor #: {r.PayorId}
                    </li>
                    <li>
                    Invoice #: {r.InvoiceNo}
                    </li>
                    <li>
                    Details: {r.Description}
                    </li>
                    <li>
                    Amount (USD): {r.Amount}
                    </li>
                </ul> 
            ))}
        </div>
    )
}