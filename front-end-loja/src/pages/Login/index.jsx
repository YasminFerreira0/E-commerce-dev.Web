import React from 'react'
import './style.css';
import { useState } from 'react';
import NavLogo from '../../components/navLogo';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        if (email && password) {
            localStorage.setItem("auth", "true");
            navigate("/dashboard");
        } else {
            alert("Preencha todos os campos.");
        }
    };

    return (
        <>
            <NavLogo />

            <div className="containerLogin">
                <form className='login'>
                    <h2>Iniciar Sessão</h2>

                    <label>
                        Email
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </label>

                    <label>
                        Senha
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </label>

                    <button type="submit" onClick={e => {
                    e.preventDefault();
                    handleLogin();
                }}>Entrar</button>

                    <p><a href="#">Esqueceu sua senha?</a></p>

                    <p>Não tem conta? <a onClick={() => navigate("/cadastro")}>Cadastre-se</a></p>
                </form>
            </div>


        </>
    );
}