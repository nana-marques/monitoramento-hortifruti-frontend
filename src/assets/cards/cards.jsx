import React from "react";


import appleImg from '../img/apple.jpg'

const Cards = () =>{
    return(
    <div>
      <div className="container">
          <h2>Monitoramento de Gôndolas</h2>
          <h3>Relatório - Fruta</h3>
          <div className="fruit">
            <div className="details">
              <img src={appleImg} alt="Maçã" className="icon"/>
              <span>Maçã</span>
            </div>
            <span className="percent">100%</span>
          </div>
      </div>
    </div>
  )
}

export default Cards