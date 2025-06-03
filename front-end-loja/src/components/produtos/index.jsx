import React from "react";
import './style.css';
import { useNavigate } from "react-router-dom";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { TbShoppingCartOff } from "react-icons/tb";
{/*import { produtos } from "../../../produtos"*/ }
import { DataContext } from "../../components/context/data";
import { LerProdutos } from "../../data/fetchProdutos";

import Carrinho from "../carrinho";
import Cabecalho from "../cabecalho";

export default function Produtos() {
    const [carItens, setCarItens] = React.useState([]);
    const [mostrarCar, setMostrarCar] = React.useState(false);
    const { produtos, setProdutos } = React.useContext(DataContext);
    const navigate = useNavigate();



    {/*const atualizar = async () => {
        try {
            await AtualizarProdutos(id, nome, valor, imagem);
            navigate("/dashboard");
            LerProdutos(setProduto);
        } catch (error) {
            console.error("Erro ao atualizar o produto:", error);
        }
    }*/}
    function addItem(item) {
        setCarItens((prev) => {
            const existente = prev.findIndex((i) => i.id === item.id);
            if (existente !== -1) {
                const novosItens = [...prev];
                const atual = novosItens[existente];
                novosItens[existente] = {
                    ...atual,
                    quantidade: (atual.quantidade || 1) + 1
                }
                return novosItens;
            }else {
                const novoItem = { ...item, quantidade: 1 };
                return [...prev, novoItem];
            }
        });
    }

    return (
        <div className="container">
            <Cabecalho />
            <div className="botaoCarrinho">
                <button onClick={() => setMostrarCar(true)}>
                    <RiShoppingCart2Fill color="#2A7AE4" />
                </button>
                <span className="carCount">
                    {carItens.length > 0 && carItens.reduce((total, item) => total + item.quantidade, 0)}
                </span>
            </div>

            {mostrarCar && (
                <div className="containerCarrinho show">
                    <button className="closeCarrinho" onClick={() => setMostrarCar(false)}>
                        <TbShoppingCartOff size={35} />
                    </button>

                    <Carrinho
                        carItens={carItens}
                        setCarItens={setCarItens}
                    />
                </div>
            )}

            <div className="containerProdutos">
                {produtos?.map((item, index) => {
                    return (
                        <div key={index} className="produto">
                            <div className="produtoInfo">
                                <img src={item.imagem} />
                                <h4>{item.nome}</h4>
                                <p>R$ {item.valor.toFixed(2)}</p>
                            </div>
                            <button className="btnComprar" onClick={() => addItem(item)}>
                                Comprar
                            </button>
                        </div>
                    )
                })}

            </div>
        </div>
    );
}