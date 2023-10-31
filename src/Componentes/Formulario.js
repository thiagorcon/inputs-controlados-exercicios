//declare todo o componente formulário e seus inputs. Exporte o formulário.
import { useState } from "react";
import Cartao from "./Cartao";
import PaginaDoCartao from "../Pagina/PaginaDoCartao";

export default function Formulario(props) {

     console.log(props);
     return (
          <>
               <label>
                    Numero : <input value={props.numeroDoCartao} onChange={props.mudarNumeroDoCartao} />
                    <p>{props.numeroDoCartao}</p>
               </label>
               <label>
                    Nome : <input value={props.nome} onChange={props.mudarNome} placeholder="'digite seu nome" />
               </label>
               <p>{props.set}</p>
               <label>
                    Data de Validade : <input value={props.dataDeValid} onChange={props.mudarDataDeValid} />
               </label>
               
               <select value={props.formaDePagamento} onChange={props.mudarFormaDePagamento} >
                    <option>Escolha opção</option>
                    <option>Débito</option>
                    <option >Crédito</option>
               </select>
               <label>
                    CVC : <input value={props.cvc} onChange={props.mudarCodigoDoCartao} />
               </label><br/>  
             <button onClick={props.botao}>Enviar</button>
          </>
     )
}