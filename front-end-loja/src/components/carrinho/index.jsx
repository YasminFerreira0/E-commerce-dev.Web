import React from 'react'
import './style.css';
import { RiCoupon2Line } from "react-icons/ri";

export default function Carrinho({ carItens, setCarItens }) {
    return (
        <div className="carrinho">
            <section className="carrinho-quant">
                <p>Seu carrinho tem <b>{carItens?.length} itens</b></p>
            </section>

            <section className="carrinho-itens">
                < div>{carItens?.map((item, index) => (
                    <div className="iten" key={index}>
                        <div >
                            <img src={item.imagem} alt={item.nome} className="imagemProduto" />
                        </div>
                        <div className="descricao">
                            <p>{item.nome}</p>
                            <div className="preco">
                                <p><b>R$ {item.valor}</b></p>
                                <div className="btn-incluir">
                                    <button className="menos">-</button>
                                    <p className="quant">1</p>
                                    <button className="mais">+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            </section>

            <section className="carrinho-total">
                <div className="valor-total">
                    <div className="valor">
                        <h3>Total:</h3>
                        <p>
                            R${" "}
                            {carItens?.reduce((total, item) => total + item.valor, 0).toFixed(2).replace(".", ",")}
                        </p>
                    </div>

                    <div className="cupom">
                        <RiCoupon2Line />
                        <p>Adicionar cupom</p>
                    </div>
                </div>
                <div className="finalizar">
                    <button className="btn-finalizar">Finalizar Compra</button>
                </div>
            </section>
        </div>
    );
}