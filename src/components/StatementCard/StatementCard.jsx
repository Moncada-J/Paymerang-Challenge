import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import RenderRemittance from '../Remittance/RenderRemittance/RenderRemittance';
import ContactDetails from '../Payee/ContactDetails/ContactDetails';
import './StatementsCard.css';

export default function StatementCard ({statement, index}) {
const [showRemittance, setShowRemittance] = useState(false);

return (
        <div className="statement-bg">
            <div className="statement-card">
                <div className="card-body">
                <h2 className="card-title payee-name-title"><i className="italic">RE:</i> {statement.Payee.Name}</h2>
                <h5 className="card-subtitle mb-2 text-muted payee-sub"><icon class="material-icons payee-icon">person</icon> 
                {statement.Payee.Attention} <strong>/</strong>
                <icon className="material-icons date-icon">today</icon> {statement.Payee.SubmissionDate}</h5>
                <ContactDetails statement={statement} /> 
                <hr />
                <p className="card-text">
                <span className="card-subtitle mb-2 text-muted payment-sub">
                    <icon className="material-icons payment-icon">payment</icon> {statement.Payment.PAN} •
                    <strong className="str-payment">CVV</strong> {statement.Payment.CVV} •
                     <strong className="str-payment">EXP</strong> {statement.Payment.Exp}
                </span>
                </p>
                <hr />
                {/* toggle button for remittance details */}
                <button onClick={() => setShowRemittance(!showRemittance)} type="button" class="btn btn-outline-secondary toggle-btn">
                    {showRemittance ? "Close Details" : "View Remittance"}
                </button>
                {showRemittance && <RenderRemittance remittance={statement.Remittance} />}            
            </div>
        </div>
    </div>
 );
}
