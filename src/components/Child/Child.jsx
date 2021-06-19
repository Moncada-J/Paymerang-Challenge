import React from 'react';

export default function Child ({statement}) {
    return (
    <>
        <div>
                <h4>Payee Name: {statement.Payee.Name}</h4>
        </div>
    </>
    )
}