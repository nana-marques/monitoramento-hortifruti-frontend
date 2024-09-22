import React from "react";
import './styles.css';

//imgs
import appleImg from '.\assets\img\apple.jpg';
import bananaImg from '.\assets\img\banana.png';
import orangeImg from '.\assets\img\orange.png';

const Login = () =>{
    return(
    <div class="container">
        <h2>Monitoramento de Gôndolas</h2>
        <h3>Relatório - Todas as Frutas Monitoradas</h3>
        <div class="fruit">
            <img src="apple.jpg" alt="Maçã" class="icon"/>
            <span>Maçã</span>
            <div class="progress-bar">
                <div class="progress" style="width: 100%;"></div>
            </div>
            <span class="percentage">100%</span>
        </div>
        <div class="fruit">
            <img src="banana.jpg" alt="Banana" class="icon"/>
            <span>Banana</span>
            <div class="progress-bar">
                <div class="progress" style="width: 75%;"></div>
            </div>
            <span class="percentage">75%</span>
        </div>
        <div class="fruit">
            <img src="orange.jpg" alt="Laranja" class="icon"/>
            <span>Laranja</span>
            <div class="progress-bar">
                <div class="progress" style="width: 25%;"></div>
            </div>
            <span class="percentage">25%</span>
        </div>
    </div>
  )
}