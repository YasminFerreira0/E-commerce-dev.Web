import React from "react";
import { HiChip } from "react-icons/hi";
import "./style.css";
import { useNavigate } from "react-router-dom";

export default function Cabecalho() {
    const navigate = useNavigate();

    return (
        <header className="cabecalho">

            <div className="logo" onClick={() => navigate("/")}>
                <HiChip size={50} color="#2A7AE4" />
                <h1><b>Tecno</b>Parts</h1>
            </div>
            <nav>
                <ul>
                    <li onClick={() => navigate("/")}>Home</li>
                    <li onClick={() => navigate("/produtos")}>Produtos</li>
                </ul>
                <button className="btnLogin" onClick={() => navigate("/login")}> Login</button>
            </nav>
        </header>
    );
}
