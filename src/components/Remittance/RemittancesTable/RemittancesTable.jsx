import React from 'react';

export default function RemittancesTable ({r}) {
    return (
        <div>
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
        </div>
    );
}