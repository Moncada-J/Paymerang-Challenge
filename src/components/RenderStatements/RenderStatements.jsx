import React from 'react';
import statements from '../../sample.json';
import StatementCard from '../StatementCard/StatementCard';

export default function Statements() {
    const statement = statements.map((s, idx) => (
        <StatementCard statement={s} key={idx} index={idx} />
    ));
    return (
        <div>
         {statement}
        </div>
    )
}
