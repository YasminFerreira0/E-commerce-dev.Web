import NavLogo from "../navLogo";
import './style.css';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CriarProduto, LerProdutos } from "../../data/fetchProdutos";
import { DataContext } from '../context/data';
import { useContext } from "react";

export default function CadastroProdutos() {
    const [nome, setNome] = useState('');
    const [valor, setValor] = useState('');
    const [imagem, setImagem] = useState('');

    const { produtos, setProdutos } = useContext(DataContext);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await CriarProduto(nome, parseFloat(valor), imagem);
            await LerProdutos(setProdutos);
            navigate("/dashboard");
        } catch (error) {
            console.error("Erro ao cadastrar produto:", error);
            alert("Erro ao cadastrar produto")
        }
    }

    return (
        <>
            <NavLogo />
            <div className="containerCadastroProdutos">
                <form className='cadastroProdutos'
                    onSubmit={handleSubmit}>
                    <h2>Adicionar novo produto</h2>

                    <label>
                        Nome do produto
                        <input
                            type="text"
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

                    <button type="submit">Cadastrar Produto</button>
                    <p onClick={() => navigate("/dashboard")}>Voltar</p>
                </form>
            </div>
        </>
    )
}