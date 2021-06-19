import React from 'react';
import statements from '../../sample.json';
export default function RenderAddress() {
      const address = statements.map((a, idx) => (
        <RenderAddress address={a} key={idx} index={idx} />
    ));
    return (
            <div>
                    <h4>
                        Address: {address}
                    </h4>
            </div>
    )
}