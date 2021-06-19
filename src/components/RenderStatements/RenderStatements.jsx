import React from 'react';
import statements from '../../sample.json';
import Child from '../Child/Child';

export default function Statements() {
    const statement = statements.map((s, idx) => (
        <Child statement={s} key={idx} index={idx} />
    ));
    return (
    <>
        <div>
         {statement}
        </div>
    </>
    )
}
