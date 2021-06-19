import React from 'react';
import RenderAddress from '../../components/RenderAddress/RenderAddress';

export default function StatementCard ({statement}) {
    return (
        <div>
             <h4>Payee: {statement.Payee.Name}</h4>
            <span> <strong>F:</strong> {statement.Payee.Fax} /  <strong>P:
            </strong> {statement.Payee.Phone}</span>
            {/* <span><strong>Address</strong>{statement.Payee.Address}</span> */}
            <RenderAddress address={statement.Payee.Address}/>
        </div>
    )
}