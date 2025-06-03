import React, { useContext } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../components/context/data";
import { LerProdutos } from "../../data/fetchProdutos";
import { DeletarProduto } from "../../data/fetchProdutos";

{/*import { produtos } from "../../../produtos";*/}
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import NavLogo from "../../components/navLogo";

export default function Dashboard() {
    const navigate = useNavigate();
    const { produtos, setProdutos } = useContext(DataContext);

    function handleLogout() {
        localStorage.removeItem("auth");
        navigate("/");
    }

    async function handleDelete(id) {
        try {
            await DeletarProduto(id);
            const updatedProdutos = produtos.filter(item => item.id !== id);
            setProdutos(updatedProdutos);
        } catch (error) {
            console.error("Erro ao deletar produto:", error);
            alert("Erro ao deletar produto");
        }
    }

    return (
        <>
            <NavLogo/>       
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

                    {produtos?.map((item, index) => {
                        return (
                            <div key={index} className="produto">
                                <div className="produtoInfo">
                                    <img src={item.imagem} />
                                    <h4>{item.nome}</h4>
                                    <p>R$ {item.valor.toFixed(2)}</p>
                                </div>
                                <div className="botoes">
                                    <button className="btnEdit" onClick={() => navigate(`/editarProduto/${item.id}`)}>
                                        <FaEdit size={25}/>
                                    </button>
                                    <button className="btnTrash" onClick={() => handleDelete(item.id)}>
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