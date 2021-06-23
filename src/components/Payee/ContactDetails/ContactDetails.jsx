import React from 'react';
import RenderAddress from '../RenderAddress/RenderAddress';
import './ContactDetails.css';

export default function ContactDetails ({statement}) {
    // this component handles the hidden payee details which can be collapsed
    return (
        <div className="accordion-header">
            <div className="accordion accordion-flush contact-accordion" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-mdb-toggle="collapse"
                            data-mdb-target="#flush-collapseOne"
                            aria-expanded="false"
                            aria-controls="flush-collapseOne"
                        >
                            <icon className="material-icons accordion-icon" alt="Phone">phone</icon> Phone
                        </button>
                    </h2>
                    <div
                    id="flush-collapseOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-mdb-parent="#accordionFlushExample"
                    >
                    <div className="accordion-body">
                        {statement.Payee.Phone}
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingTwo">
                    <button
                        className="accordion-button collapsed"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#flush-collapseTwo"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo"
                    >
                        <icon className="material-icons accordion-icon">dialpad</icon>
                     Fax
                    </button>
                </h2>
                <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-mdb-parent="#accordionFlushExample"
                >
                <div className="accordion-body">
                    {statement.Payee.Fax}
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
                <button
                    className="accordion-button collapsed"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                >
                    <icon className="material-icons accordion-icon">public</icon>
                    Address
                </button>
        </h2>
        <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-mdb-parent="#accordionFlushExample"
            >
            <div className="accordion-body">
                <RenderAddress statement={statement} />
            </div>
        </div>
       </div>
      </div>    
    </div>
    );
}