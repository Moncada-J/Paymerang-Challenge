import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

export default function Sidenav () {
return (
    <div className="sidenav">
                <h3 className="sidenavSub"><icon class="material-icons dashboard-icon">window</icon>Dashboard</h3>
                <Link className="sideLink" to="#services">Services</Link>
                <Link className="sideLink" to="#clients">Clients</Link>
                <Link className="sideLink" to="#contact">Contact</Link>
                <Link className="sideLink" to="#contact">Search</Link>
        <div className="account-div">
            <h4 className="sidebar-accountsTitle">Recent Settlements</h4>
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