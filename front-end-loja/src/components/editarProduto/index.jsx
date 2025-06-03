import React, { use, useContext } from 'react';
import NavLogo from "../navLogo";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './style.css';
import {
    AtualizarProduto,
    LerProdutos
} from "../../data/fetchProdutos";
import { DataContext } from '../../components/context/data';

export default function EditarProduto() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { produtos, setProdutos } = useContext(DataContext);
    const produto = produtos.find((item) => item.id === parseInt(id));

    {/*const location = useLocation();
    const produto = location.state;*/}

    const [nome, setNome] = useState(produto?.nome || '');
    const [valor, setValor] = useState(produto?.valor || '');
    const [imagem, setImagem] = useState(produto?.imagem || '');

    const atualizar = async () => {
        try {
            await AtualizarProduto(id, nome, parseFloat(valor), imagem);
            await LerProdutos(setProdutos)
            navigate("/dashboard");
        } catch (error) {
            console.error("Erro ao atualizar o produto:", error);
        }
    }

    if (!produto) {
        return (
            <div className="containerEditarProdutos">
                <h2>Produto não encontrado</h2>
                <button onClick={() => navigate("/dashboard")}>Voltar</button>
            </div>
        );
    }

    return (
        <>
            <NavLogo />
            <div className="containerEditarProdutos">
                <form 
                    className='editarProdutos'
                    onSubmit={(e) => {
                        e.preventDefault();
                        atualizar();
                    }}
                >
                    <h2>Editar informações do Produto</h2>

                    <label>
                        Nome do produto
                        <input type="text"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                    </label>

                    <label>
                        Valor
                        <input
                            type="number"
                            value={valor}
                            onChange={(e) => setValor(e.target.value)}
                        />
                    </label>

                    <label>
                        Imagem
                        <input
                            type="url"
                            value={imagem}
                            onChange={(e) => setImagem(e.target.value)}
                        />
                    </label>

                    {imagem && (
                        <img
                            src={imagem}
                            alt="Prévia do produto"
                            className="previewImage"
                        />
                    )}

                    <button type="submit">Editar Produto</button>
                    <p onClick={() => navigate("/dashboard")}>Voltar</p>
                </form>
            </div>
        </>
    );
}