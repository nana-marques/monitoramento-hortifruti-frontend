import React from "react";
import './styles.css';

//imgs
import appleImg from '../img/apple.jpg'
import bananaImg from '../img/banana.png';
import orangeImg from '../img/orange.png';

//navbar
import Navbar from "../navbar";

//link
import { Link } from "react-router-dom";

const Home = () =>{
    return(
    <div>
        <div className="container">
            <h2>Monitoramento de Gôndolas</h2>
            <h3>Relatório - Todas as Frutas Monitoradas</h3>
            
                <div className="fruit">
                    <img src={appleImg} alt="Maçã" className="icon"/>
                    <span>Maçã</span>
                    <div className="progress-bar">
                        <div className="progress" ></div>
                    </div>
                    <span className="percentage">100%</span>
                </div>
            
            <div className="fruit">
                <img src={bananaImg} alt="Banana" className="icon"/>
                <span>Banana</span>
                <div className="progress-bar">
                    <div className="progress"></div>
                </div>
                <span className="percentage">75%</span>
            </div>
            <div className="fruit">
                <img src={orangeImg} alt="Laranja" className="icon"/>
                <span>Laranja</span>
                <div className="progress-bar">
                    <div className="progress"></div>
                </div>
                <span className="percentage">25%</span>
            </div>
        </div>
    </div>
  )
}

export default Home