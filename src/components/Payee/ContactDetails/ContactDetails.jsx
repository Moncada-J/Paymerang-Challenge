import React from 'react';
import RenderAddress from '../RenderAddress/RenderAddress';
import './ContactDetails.css';

export default function ContactDetails ({statement}) {
    return (
        <div>
            <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingOne">
                        <button
                            class="accordion-button collapsed"
                            type="button"
                            data-mdb-toggle="collapse"
                            data-mdb-target="#flush-collapseOne"
                            aria-expanded="false"
                            aria-controls="flush-collapseOne"
                        >
                            <icon class="material-icons" alt="Phone">phone</icon> Phone
                        </button>
                    </h2>
                    <div
                    id="flush-collapseOne"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-mdb-parent="#accordionFlushExample"
                    >
                    <div class="accordion-body">
                        {statement.Payee.Phone}
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingTwo">
                    <button
                        class="accordion-button collapsed"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#flush-collapseTwo"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo"
                    >
                        <icon class="material-icons">dialpad</icon>
                     Fax
                    </button>
                </h2>
                <div
                id="flush-collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-mdb-parent="#accordionFlushExample"
                >
                <div class="accordion-body">
                    {statement.Payee.Fax}
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingThree">
                <button
                    class="accordion-button collapsed"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                >
                    <icon class="material-icons">public</icon>
                    Address
                </button>
        </h2>
        <div
            id="flush-collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-mdb-parent="#accordionFlushExample"
            >
            <div class="accordion-body">
                <RenderAddress statement={statement} />
            </div>
        </div>
       </div>
      </div>    
    </div>
    );
}