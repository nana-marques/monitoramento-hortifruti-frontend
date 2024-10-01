import React, { useState } from "react";
import { motion } from "framer-motion";
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
                        <p>Monitoramento de Gondolas</p>
                    </li>
                    <li className="item">
                        <a href="#">Opção 1</a>
                    </li>
                    <li className="item">
                    <a href="#">Opção 2</a>
                    </li>
                    <li className="item">
                    <a href="#">Opção 3</a>
                    </li>
                </ul>
            </motion.div>
        </div>
    );
};

export default Navbar;
