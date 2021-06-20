import React from 'react';
// import statements from '../../../sample.json';

export default function RenderAddress({statement}) {
 // this component adds the full address per payee
 // (i created a second component to keep it clean!)
    return (
        <>
            <h4>Address</h4>
            <p>
            {statement.Payee.Address.Address1}
            {statement.Payee.Address.Address2} 
            <br />
            {statement.Payee.Address.City},&nbsp;
            {statement.Payee.Address.StateOrProvince}
            <br /> 
            {statement.Payee.Address.Country} &nbsp;
            {statement.Payee.Address.PostalCode}
            </p>
     
       </>
    )
}