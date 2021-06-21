import React from 'react';
// import { Link } from 'react-router-dom';
import RenderAddress from '../Payee/RenderAddress/RenderAddress';
import RenderRemittances from '../../components/Remittance/RenderRemittance/RenderRemittance';
import './StatementsCard.css';

export default function StatementCard ({statement}) {
    return (
        // this component holds all keys mapped out *not pun intended*, 
        // and design structure for the /statements route - shown on app.js
    <main className="statement-card">
        <table className="data-table">
            <thead>
                <tr>
                    <th>Payee</th>
                    <th>Date</th>
                    <th>Attention</th>
                     <th>Status</th> {/*  custom feature  */}
                    <th>Payment</th>
                    <th>Remittances</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{statement.Payee.Name}</td>
                    <td>{statement.Payee.SubmissionDate}</td>
                </tr>
            </tbody>
        </table>
        

            
            













            {/* 
                    {/* <!-- Collapsed content --> 
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
            </div> */}
        </main>
    );
}