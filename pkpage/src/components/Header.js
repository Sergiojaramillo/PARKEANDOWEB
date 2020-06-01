import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/logo.png';


class header extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="header__logo">
                    <img src={logo} alt="Not found"></img>
                </div>
                <nav className="header__nav">
                    <ul className="header__nav-ul">
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        
                        <li>
                            <a href="/">Parqueaderos</a>
                        </li>
                        
                        <li>
                            <a href="/">Caracteristicas</a>
                        </li>
                        <li>
                            <Link to="/Contactos">Contactos</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        
        )
    }
}

export default header;