import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { produtos } from "../../../produtos";
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

export default function Dashboard() {
    const navigate = useNavigate();

    function handleLogout() {
        localStorage.removeItem("auth");
        navigate("/");
    }

    return (
        <>
            <div className="sideBar">
                <div className="sideBarContent">
                    <img className="perfil" src="../../public/images/ez.jpg" alt="" />
                    <h2>Dashboard</h2>

                    <ul>
                        <li>Home</li>
                        <li>Produtos</li>
                        <li>Pedidos</li>
                        <li>Clientes</li>
                    </ul>

                    <button className="btnSair" onClick={handleLogout}>Sair</button>
                </div>
            </div>

            <div className="mainContent">
                <div className="header">
                    <h1>Produtos Cadastrados</h1>
                    <button className="btnCadastrar" onClick={
                        () => navigate("/cadastroProdutos")
                    }>+ Novo Produto</button>
                </div>

                <div className="content">

                    {produtos?.map((item) => {
                        return (
                            <div key={item.nome} className="produto">
                                <div className="produtoInfo">
                                    <img src={item.imagem} />
                                    <h4>{item.nome}</h4>
                                    <p>R$ {item.valor.toFixed(2)}</p>
                                </div>
                                <div className="botoes">
                                    <button className="btnEdit" onClick={() => navigate("/editarProduto")}>
                                        <FaEdit size={25}/>
                                    </button>
                                    <button className="btnTrash">
                                        <FaTrashAlt size={25}/>
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    );
}