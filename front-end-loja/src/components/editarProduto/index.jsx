import React from 'react';
import NavLogo from "../navLogo";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './style.css';
export default function EditarProduto() {
    const [imagemUrl, setImagemUrl] = useState('');
    const navigate = useNavigate();
    return (
        <>
            <NavLogo />
            <div className="containerEditarProdutos">
                <form className='editarProdutos'>
                    <h2>Editar informações do Produto</h2>

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

                    <button type="submit">Editar Produto</button>
                    <p onClick={() => navigate("/dashboard")}>Voltar</p>
                </form>
            </div>
        </>
    )
}