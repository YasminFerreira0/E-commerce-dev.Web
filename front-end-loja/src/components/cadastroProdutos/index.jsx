import NavLogo from "../navLogo";
import './style.css';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CadastroProdutos() {
    const [imagemUrl, setImagemUrl] = useState('');
    const navigate = useNavigate();

    return (
        <>
            <NavLogo />
            <div className="containerCadastroProdutos">
                <form className='cadastroProdutos'>
                    <h2>Adicionar novo produto</h2>

                    <label>
                        Nome do produto
                        <input type="text" />
                    </label>

                    <label>
                        Descrição
                        <input type="text" />
                    </label>

                    <label>
                        Valor
                        <input type="number" />
                    </label>

                    <label>
                        Imagem
                        <input
                            type="url"
                            value={imagemUrl}
                            onChange={(e) => setImagemUrl(e.target.value)}
                        />
                    </label>

                    {imagemUrl && (
                        <img
                            src={imagemUrl}
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