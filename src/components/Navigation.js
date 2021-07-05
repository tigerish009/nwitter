import React from 'react';
import { Link } from 'react-router-dom';

const Navigations = () => 
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/profile">My Profile</Link>
            </li>
        </ul>
    </nav>

export default Navigations;