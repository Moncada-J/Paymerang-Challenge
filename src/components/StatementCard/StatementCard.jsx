import React from 'react';
import RenderAddress from '../Payee/RenderAddress/RenderAddress';
import RenderRemittances from '../../components/Remittance/RenderRemittance/RenderRemittance';

export default function StatementCard ({statement}) {
    return (
        // this component holds all keys mapped out *not pun intended*, 
        // and design structure for the /statements route - shown on app.js
        <main className="statement-card">
            {/*
             !!! Payee Info !!!
              */}
            <hr />
            <div className="payee-container">
                 <h4>Payee: {statement.Payee.Name}</h4>
                <span> <strong>F:</strong> {statement.Payee.Fax} /  <strong>P:
                </strong> {statement.Payee.Phone}
                <br/></span>
                <RenderAddress statement={statement}/>
                <h5><strong>Attention:</strong> {statement.Payee.Attention} <br />
                Submitted: {statement.Payee.SubmissionDate}</h5>
            </div>
            <hr />
            {/* 
            !!! Payment Info !!!
            */}
           <div className="payment-container">
                <h3>Payment Details</h3>
                <h5> Account Number: {statement.Payment.PAN} 
                    <br/>
                    CVV #: {statement.Payment.CVV}
                    <br />
                    Expires on: {statement.Payment.Exp}
                </h5>
            </div>
            <hr />
            <div className="remittance-container">
                <h3>Remittance Details</h3>
                <RenderRemittances remittance={statement.Remittance} />
            </div>
        </main>
    );
}