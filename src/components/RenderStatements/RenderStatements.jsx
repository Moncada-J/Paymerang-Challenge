import React from 'react';
import statements from '../../sample.json';
import StatementCard from '../StatementCard/StatementCard';
export default function Statements() {
    return (
        <div>
            {/* this maps out the object of json data
             into three divisions:
            1 - Payee, 2 - Payment, 3 - Remittance */}
            {statements.map((statement, idx) => (
                    <StatementCard statement={statement} key={idx} index={idx} />
                ))}
        </div>
    )
}
