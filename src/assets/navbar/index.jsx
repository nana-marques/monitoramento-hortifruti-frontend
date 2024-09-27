import React from "react";
import './styles.css';

const Navbar = () =>{
    return(
    <div className="container-navbar">
        <ul className="navbar">
            <li className="item">
                <div className="hamburguer"></div>
                <div className="hamburguer"></div>
                <div className="hamburguer"></div>
            </li>
            <li className="item"><p>Monitoramento de Gondolas</p></li>
        </ul>
    </div>
  )
}
export default Navbar