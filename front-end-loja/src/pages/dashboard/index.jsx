import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { HiChip } from "react-icons/hi";

export default function Dashboard() {
    const navigate = useNavigate();

    function handleLogout() {
        localStorage.removeItem("auth");
        navigate("/");
    }

    return (
        <>
            <div className="sideBar">
                {/* <div className="logoDash">
                    <HiChip size={40} color="#2A7AE4" />
                    <h1><b>Tecno</b>Parts</h1>
                </div>*/}
                <h2>Dashboard</h2>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Produtos</a></li>
                    <li><a href="#">Pedidos</a></li>
                    <li><a href="#">Clientes</a></li>
                </ul>
                <button onClick={handleLogout}>Sair</button>
            </div>
        </>
    );
}