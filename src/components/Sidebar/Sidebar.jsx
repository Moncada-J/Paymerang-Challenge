import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

export default function Sidenav () {
return (
    // this component leaves room for future development -
    // especially with a database and SPA future page routing 
    <div className="sidenav">
                <h3 className="sidenavSub"><icon className="material-icons dashboard-icon">window</icon>Dashboard</h3>
                <Link className="sideLink" to="#">
                <icon className="material-icons payees-icon">person</icon>Payees</Link>
                <Link className="sideLink" to="#">
                <icon className="material-icons payments-icon">payments</icon>Payments</Link>
                <Link className="sideLink" to="#">
                <icon className="material-icons remittances-icon">contactless</icon>Remittances</Link>
                <Link className="searchLink" to="#">
                <icon className="material-icons search-icon">search</icon>Search</Link>
        <div className="account-div">
            <h4 className="sidebar-accountsTitle">Recent Settlements</h4>
            {/* hard coded data, leaving room for future feature development */}
            <ul className="accountDiv-text">
                <li>
                    $30,718.78
                </li>
                <li>
                    $28,192.35
                </li>
                <li>
                     $62,101.99
                </li>
            </ul>
        </div>
     </div>
    );
}