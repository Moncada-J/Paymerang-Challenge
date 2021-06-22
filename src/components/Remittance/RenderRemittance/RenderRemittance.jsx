import React, { useState } from 'react';

export default function RenderRemittance({remittance}) {

    

    return (
        // this component maps out the 
        // array nested inside the json data
        // for remittance keys
    <div>

        <table className="table data-table">
            <thead className="table-header">
                <tr>
                <th scope="col">Payor Name</th>
                <th scope="col">Payor ID</th>
                <th scope="col">Invoice No.</th>
                <th scope="col">Amount (USD)</th>
                <th scope="col">Transaction <br /> Details</th>
                </tr>
            </thead>
        {remittance.map((remittance, index) => (
            <tbody style={{
        backgroundColor: index % 2 ?  "#dcdfe2" : "#ffffff", color: index % 2 ? "#426d84" : "#575457"
      }}>
                <tr>
                <th scope="row">{remittance.PayorName}</th>
                <td>{remittance.PayorId}</td>
                <td>{remittance.InvoiceNo}</td>
                <td>{remittance.Amount}</td>
                <td colspan="2">{remittance.Description}</td>
                </tr>
            </tbody>
        ))}
        </table>
      
</div>
    )
}