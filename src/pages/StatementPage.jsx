import React from 'react';
import RenderStatements from '../components/RenderStatements/RenderStatements';
import './StatementPage.css';

 export default function StatementPage() {
    return (
        <main className="statementPage-body">
           <RenderStatements />
        </main>
    )
}