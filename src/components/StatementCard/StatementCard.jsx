import React from 'react';
import RenderAddress from '../../components/RenderAddress/RenderAddress';

export default function StatementCard ({statement}) {
    return (
        <div>
             <h4>Payee: {statement.Payee.Name}</h4>
            <span> <strong>F:</strong> {statement.Payee.Fax} /  <strong>P:
            </strong> {statement.Payee.Phone}</span>
            <RenderAddress addressList={statement.Payee.Address}/>
            <h5><strong>Attention:</strong> {statement.Payee.Attention} <br />
            Submitted: {statement.Payee.SubmissionDate}</h5>
        </div>
    );
}