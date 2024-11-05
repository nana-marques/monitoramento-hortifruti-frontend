// ErrorPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.css'; // Arquivo de estilo separado para a página de erro

const ErrorPage = () => {
    return (
        <div className="error-container">
            <h1 className="error-title">404</h1>
            <h2 className="error-message">Oops! Página não encontrada</h2>
            <p className="error-description">
                A página que você está tentando acessar não existe ou foi movida.
            </p>
            <Link to="/" className="home-button">
                Voltar para a Página Inicial
            </Link>
        </div>
    );
};

export default ErrorPage;
