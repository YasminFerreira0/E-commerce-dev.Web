import React from "react";
import { HiChip } from "react-icons/hi";
import "./style.css";

export default function Cabecalho() {
    return (
        <header className="cabecalho">

            <div className="logo">
                <HiChip size={50} color="#2A7AE4" />
                <h1><b>Tecno</b>Parts</h1>
            </div>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Produtos</li>
                </ul>
                <button className="btnLogin"> Login</button>
            </nav>
        </header>
    );
}
