import Cartao from "../Componentes/Cartao";
import { LayoutDaPagina } from "./estiloDaPaginaDoCartao";
import { useState } from "react";
import Formulario from "../Componentes/Formulario";



function PaginaDoCartao(props) {
    //declare os estados aqui
    const [nome, setNome] = useState('')
    const [numeroDoCartao, SetNumeroDoCartao] = useState('')
    const [dataDeValid, setDataDeValid] = useState('')
    const [formaDePagamento, setFormaDePagamento] = useState('')
    const [cvc, setCodigoCartao] = useState('')




    //declare as funções de controle de inputs aqui
    function mudarNome(event) {
        setNome(event.target.value)
        console.log(event.target.value);
    }
    function mudarNumeroDoCartao(event) {
        SetNumeroDoCartao(event.target.value)
        console.log(event.target.value);
    }
    function mudarDataDeValid(event) {
        setDataDeValid(event.target.value)
        console.log(event.target.value);
    }
    function mudarFormaDePagamento(event) {
        setFormaDePagamento(event.target.value)
        console.log(event.target.value);
    }
    function mudarCodigoDoCartao(event) {
        setCodigoCartao(event.target.value)
        console.log(event.target.value);
    }
    function botao() {
        //prevent.preventDefault()
        alert('Seu cartão foi cadastrado com sucesso')
        const limparInputs = () => {
            setNome("");
            SetNumeroDoCartao("");
            setDataDeValid("");
            setFormaDePagamento("");
            setCodigoCartao("Escolha opção");
            limparInputs();
        }
        {limparInputs};
        }
        return (
            <LayoutDaPagina>
                {/* Passe as variáveis de estado para o Cartão. Use Props. */}
                <Cartao
                    pagamento={formaDePagamento}
                    numero={numeroDoCartao}
                    nome={nome}
                    cvc={cvc}
                    validade={dataDeValid}
                />

                {/* Chame o Componente Formulário Aqui */}
                <Formulario

                    nome={nome} setNome={setNome}
                    mudarNome={mudarNome}

                    numeroCartao={numeroDoCartao} setNumeroDoCartao={SetNumeroDoCartao} mudarNumeroDoCartao={mudarNumeroDoCartao}

                    cvc={cvc} setCodigoCartao={setCodigoCartao}
                    mudarCodigoDoCartao={mudarCodigoDoCartao}

                    dataDeValid={dataDeValid} setDataDeValid={setDataDeValid}
                    mudarDataDeValid={mudarDataDeValid}

                    formaDePagamento={formaDePagamento} setFormaDePagamento={setFormaDePagamento}
                    mudarFormaDePagamento={mudarFormaDePagamento}
                    botao={botao}

                />
                {/* Passe a função de controle de input e variável de estado para o formulário. Para isso use Props */}


            </LayoutDaPagina>

        );
    }

    export default PaginaDoCartao;
