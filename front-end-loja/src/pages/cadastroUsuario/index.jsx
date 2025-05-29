import React from 'react'
import './style.css';
import NavLogo from '../../components/navLogo';
import { useNavigate } from 'react-router-dom';

export default function CadastroUsuario() {
    const navigate = useNavigate();

    return (
        <>
            <NavLogo />
            <div className="containerCadastro">
                <form className='cadastro'>
                    <h2>Criar uma conta</h2>

                    <label>
                        Nome Completo
                        <input type="text" />
                    </label>

                    <label>
                        Email
                        <input type="email" />
                    </label>

                    <label>
                        Senha
                        <input type="password" />
                    </label>

                    <button type="submit">Criar conta</button>
                    <p>Já tem conta? <a onClick={() => navigate("/login")}>Entrar</a></p>
                </form>
            </div>
        </>
    )
}