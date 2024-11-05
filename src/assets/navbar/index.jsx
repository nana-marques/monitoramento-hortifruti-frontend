import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './styles.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="container-navbar">
            <button className="menu-button" onClick={toggleMenu}>
                <div className="hamburguer"></div>
                <div className="hamburguer"></div>
                <div className="hamburguer"></div>
            </button>
            <motion.div 
                className="sidebar"
                initial={{ x: '-100%' }}
                animate={{ x: isOpen ? 0 : '-100%' }}
                transition={{ type: 'spring', stiffness: 100 }}
            >
                <button className="close-button" onClick={toggleMenu}>X</button>
                <ul className="navbar">
                    <li className="item">
                        <Link to="/" onClick={toggleMenu}>Monitoramento de Gôndolas</Link>
                    </li>
                    <li className="item">
                        <Link to="/perfil" onClick={toggleMenu}>Perfil de Usuário</Link>
                    </li>
                    <li className="item">
                        <Link to="/opcao2" onClick={toggleMenu}>Opção 2</Link>
                    </li>
                    <li className="item">
                        <Link to="/opcao3" onClick={toggleMenu}>Opção 3</Link>
                    </li>
                </ul>
            </motion.div>
        </div>
    );
};

export default Navbar;
