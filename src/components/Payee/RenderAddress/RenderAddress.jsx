import React from 'react';
// import statements from '../../../sample.json';

export default function RenderAddress({statement}) {
 // this component adds the full address (passed down the statement prop 2x)
    return (
            <p className="address-body">
                {statement.Payee.Address.Address1}
                {statement.Payee.Address.Address2} 
                <br />
                {statement.Payee.Address.City},&nbsp;
                {statement.Payee.Address.StateOrProvince}, &nbsp;
                {statement.Payee.Address.Country} &nbsp;
                {statement.Payee.Address.PostalCode}
            </p>
    );
}