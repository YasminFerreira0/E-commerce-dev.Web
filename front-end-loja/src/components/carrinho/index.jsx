import React from 'react'
import './style.css';
import { RiCoupon2Line } from "react-icons/ri";

export default function Carrinho({ carItens, setCarItens }) {
    const mudarQuantidade = (index, operacao) => {
        const novosItens = [...carItens];
        const novasQuantidade = (novosItens[index].quantidade || 1) + operacao;
        if (novasQuantidade < 1) {
            novosItens.splice(index, 1);
        }else{
            novosItens[index].quantidade = novasQuantidade;
        }
        setCarItens(novosItens);
    }

    return (
        <div className="carrinho">
            <section className="carrinho-quant">
                <p>Seu carrinho tem <b>{carItens.reduce((total, item) => total + (item.quantidade || 1), 0)} itens</b></p>
            </section>

            <section className="carrinho-itens">
                < div>{carItens?.map((item, index) => (
                    <div className="iten" key={index}>
                        <img src={item.imagem} alt={item.nome} className="imagemProduto" />
                        <div className="descricao">
                            <p className='nome'>{item.nome}</p>
                            <div className="linha-inferior">
                                <p className='valor-unitario'><b>R$ {(item.valor).toFixed(2).replace('.', ',')}</b></p>
                                <div className="btn-incluir">
                                    <button className="menos" onClick={() => mudarQuantidade(index, -1)}>-</button>
                                    <p className="quant">{item.quantidade || 1}</p>
                                    <button className="mais" onClick={() => mudarQuantidade(index, 1)}>+</button>
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
                            {carItens?.reduce((total, item) => total + item.valor * (item.quantidade || 1), 0).toFixed(2).replace(".", ",")}
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