import React from "react";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { TbShoppingCartOff } from "react-icons/tb";
import { produtos } from "../../../produtos"
import './style.css';
import Carrinho from "../carrinho";
import Cabecalho from "../cabecalho";

export default function Produtos() {
    const [carItens, setCarItens] = React.useState([]);
    const [mostrarCar, setMostrarCar] = React.useState(false);

    function addItem(item) {
        setCarItens((prev) => [...prev, item]);
    }
    return (
        <div className="container">
            <Cabecalho />
            <div className="botaoCarrinho">
                <button onClick={() => setMostrarCar(true)}>
                    <RiShoppingCart2Fill color="#2A7AE4" />
                </button>
                <span className="carCount">{carItens.length > 0 && carItens.length}</span>
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
                {produtos?.map((item) => {
                    return (
                        <div key={item.nome} className="produto">
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