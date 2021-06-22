import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import RenderAddress from '../Payee/RenderAddress/RenderAddress';
import RenderRemittance from '../../components/Remittance/RenderRemittance/RenderRemittance';
import './StatementsCard.css';

export default function StatementCard ({statement, index}) {
const [showRemittance, setShowRemittance] = useState(false);

return (
        // this component holds all keys mapped out *not pun intended*, 
        // and design structure for the /statements route - shown on app.js
        <div className="statement-bg">
            <div class="statement-card">
                <div class="card-body">
                <h2 class="card-title payee-name-title"><i className="italic">RE:</i> {statement.Payee.Name}</h2>
                <h5 class="card-subtitle mb-2 text-muted payee-sub"><icon class="material-icons payee-icon">person</icon> 
                {statement.Payee.Attention} <strong>/</strong>
                <icon class="material-icons date-icon">today</icon> {statement.Payee.SubmissionDate}</h5>
                <hr />
                <p class="card-text">
                <span class="card-subtitle mb-2 text-muted payment-sub">
                    <icon class="material-icons payment-icon">payment</icon> {statement.Payment.PAN} •
                    <strong className="str-payment">CVV</strong> {statement.Payment.CVV} •
                     <strong className="str-payment">EXP</strong> {statement.Payment.Exp}
                </span>
                </p>
                <hr />
                <button onClick={() => setShowRemittance(!showRemittance)} type="button" class="btn btn-outline-secondary toggle-btn">
                    {showRemittance ? "Close Details" : "View Remittance"}
                </button>
                {showRemittance && <RenderRemittance remittance={statement.Remittance} />}
                <button onClick={() => setShowRemittance(!showRemittance)} type="button" class="btn btn-outline-secondary toggle-btn">
                    {showRemittance ? "Close Details" : "Contact Payee"}
                </button>
            </div>
        </div>
    </div>
 );
}


                    {/* <!-- Collapsed content --> <tbody>
    //         <tr>
    //             <td>{statement.Payee.Name}</td>
    //             <td className="active-row">{statement.Payee.SubmissionDate}</td>
    //             <td>{statement.Payee.Attention}</td>
    //             <td class="active-row">{statement.Payee.Payment}</td>
    //             <td><RenderRemittances remittance={statement.Remittance} /></td>
    //         </tr>
    //     </tbody>
    //   </table> 
                    <div class="row">
                    <div class="col">
                        <div class="collapse multi-collapse mt-3 payee-body" id="multiCollapseExample1">
                            <span>
                                <strong className="card-str">PHONE:
                                </strong> {statement.Payee.Phone} <br />
                                 <strong className="card-str">FAX:</strong> {statement.Payee.Fax}
                            </span>
                            <span className="address-text">
                            <RenderAddress statement={statement}/>
                            </span>
                        </div>
                    </div>
                    <div class="col">
                        <div class="collapse multi-collapse mt-3" id="multiCollapseExample2">
                         <span className="employee-body"><strong className="card-str">Attention:</strong> {statement.Payee.Attention}
                          <br /><strong className="card-str">Submitted</strong>: {statement.Payee.SubmissionDate}</span>
                        </div>
                    </div>
                    </div>
                <hr />
            {/* 
            !!! Payment Info !!!
       
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
                    <p class="card-text">
                    {/* Some quick example text to build on the card title and make up the bulk of the
                    card's content. 
                    </p>
                    <button type="button" class="btn btn-primary">Button</button>
                </div>
            </div> 
       */}