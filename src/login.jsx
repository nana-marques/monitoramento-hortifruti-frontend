import React from "react";

const Login = () =>{
    return(
        <div className="r-container">
            <span className="title">Monitoramento de gôndolas</span>
            <span className="sub-title">Login</span>
            <form>
                <input type="email" placeholder="Digite seu email: " />
                <input type="password" placeholder="Digite sua senha: " />

                <button>Login</button>
            </form>
            <p>Você ainda não tem conta? Registro</p>

        </div>
    )
}

export default Login