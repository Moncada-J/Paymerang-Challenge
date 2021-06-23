import React from 'react';
import statements from '../../data/sample.json';
import StatementCard from '../Statements/Statements';
export default function Statements() {
    return (
        <ul>
            {/* this is the MAIN component for rendering/mapping the sample data 
             into three divisions and passing it down to the main child component:
            1 - Payee, 2 - Payment, 3 - Remittance */}
            {statements.map((statement, idx) => (
                    <StatementCard statement={statement} key={idx} index={idx} />
                ))}
        </ul>
    )
}
