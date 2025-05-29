import React from "react";
import './style.css'
import { useNavigate } from "react-router-dom";
import { HiChip } from "react-icons/hi";
import Cabecalho from "../../components/cabecalho";

export default function Home() {
    const navigate = useNavigate();

    return (
        <>
            <div className="containerHome">
                <Cabecalho />
                <section className="sobre">
                    <h1>Bem-vindo à TecnoParts</h1>
                    <p>Sua loja de equipamentos eletrónicos e peças de computadores. Oferecemos uma ampla variedade de produtos das melhores marcas do mercado.</p>
                </section>

                <section className="porque">
                    <h3>Por que escolher a TecnoParts?</h3>
                    <ul>
                        <li><b>Produtos de Qualidade:</b> Trabalhamos com as melhores marcas</li>
                        <li><b>Compre com Segurança:</b> Protegemos seus dados e sua privacidade</li>
                        <li><b>Atendimento Especializado:</b> Nossa equipe està pronta para ajudar</li>
                    </ul>
                </section>
                <button className="btnHome" onClick={() => navigate("/produtos")}>Ver Produtos</button>
            </div>
        </>
    )
}