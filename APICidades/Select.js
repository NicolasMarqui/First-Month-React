import React, { Component } from 'react'

export default class Select extends Component {
    constructor(props){
        super(props);

        this.state = {
            selectedValue : "Selecione um Estado",
            selectedCity: "Selecione uma cidade",
            cep: "",
            cepPreenchido : "",
            isSave: false,
            inputDisabled: true,
            itemSelecionado: "",
            value: "",
        }

        this.url = "https://viacep.com.br/ws/";
        this.jsonFinal = "/json/";
        this.arraySelected = [];
    }

    handleChange = e => {
        this.setState({
            selectedValue: e.target.value,
            //inputDisabled: !this.state.inputDisabled,
        })
    }

    handleChangeCidade = (e) =>{
        this.setState({
            inputDisabled: !this.state.inputDisabled,
            itemSelecionado: e.target.value
        })

        // this.arraySelected.push(e.target.value)

    }

    pegarCEP = e => {
        e.preventDefault();
        
        if(this.numberInput.value.length !== 8){
            alert('Por favor insira um CEP com 8 números')
        }else{
            this.setState({
                cep: this.numberInput.value,
                isSave: true,
            })

            this.fetchCEP(this.numberInput.value)

        }

    }

    fetchCEP = (cep) => {
        fetch(this.url + cep + this.jsonFinal)
            .then(res => res.json())
            .then(data => this.saveCEP(data))

    }

    saveCEP = data => {
        this.setState({
            cepPreenchido: data,
        })

    }

    enableInput = () => {
        this.setState({
            inputDisabled: !this.state.inputDisabled,
        })
    }

    renderTeste = (obj) =>{
        return(
            <div className ="renderCep">
                {this.state.itemSelecionado !== obj.localidade ? <h1>{`ERRO: o cep digitado pertence a cidade de ${obj.localidade} e a cidade selecionada foi ${this.state.itemSelecionado}`}</h1> : 
                <h1>{`${obj.cep} pertence á rua ${obj.logradouro} no bairro ${obj.bairro} na cidade de ${obj.localidade}, ${obj.uf}`}</h1>}
            </div>
        )
    }

    checkCEP = () =>{
        if(this.state.itemSelecionado !== ""){
            if(this.state.itemSelecionado !== this.state.cepPreenchido.localidade){
                alert('nao batem')
            }else{
                alert('batem')
            }
        }
    }

    inputHandler = (e) => {
        this.setState({value: e.target.value})
    }


    render() {

        let message = `Você selecionou o estado de ${this.state.selectedValue}`

        const estados = this.props.city.filter(cidades => {
            return cidades.sigla
        })

        

        let listaCidades = this.props.city.filter(cid => {
            return cid.nome === this.state.selectedValue
        });

        let cidades = [];

        let create = () => {
            for (let j = 0; j < listaCidades.length; j++){
                for(let i = 0;i< listaCidades[j].cidades.length;i++){
                   cidades.push(<option key={i}>{listaCidades[j].cidades[i]}</option>)
                }
              }
              return cidades;
        }

        return (
        <div>
            <h1>Selecione um estado</h1>  
            <select value={this.state.selectedValue}
                    onChange={this.handleChange}>
            <option>{this.state.selectedValue}</option>
                
                {
                    estados.map((est,index) => {
                        return(
                            <option key={index}>
                                {est.nome}
                            </option>
                        )
                    })
                }
            </select>
            {/* <p>{message}</p> */}
            <h1>As cidade</h1>
            <select onChange={this.handleChangeCidade}>
                <option>{this.state.selectedCity}</option>
                {
                    create()
                }
            </select>
            <h1>Digite o CEP</h1>
            <form onSubmit={this.pegarCEP}>
                <input type="text" placeholder="CEP" ref={input => this.numberInput = input} id="cidadeInput" 
                 disabled={(this.state.inputDisabled) ? "disabled" : ""} value={this.state.value} onChange={this.inputHandler}></input>
                <button type="onSubmit">Mandar CEP</button>
            </form>
            <div>
                {/* {this.state.isSave ? <h1>{this.state.cep}</h1> : <p>Digite um cep acima</p>} */}
                {this.state.cepPreenchido !== "" ? this.renderTeste(this.state.cepPreenchido) : <p>Nenhum informação disponivel</p>}
            </div>
        </div>

        )}
}
