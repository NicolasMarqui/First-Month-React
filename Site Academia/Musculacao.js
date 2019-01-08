import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../../customCss/musculacao.css'
import Descr from './MusDescricao';
import Preco from './Preco';
import {Route, Redirect ,NavLink ,Link, BrowserRouter as Router, Switch} from 'react-router-dom';

export default class Musculacao extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
    <div>
        <div className="goBack">
            <a><button><Link to="/" style={{textDecoration: 'none'}}>Voltar Home</Link></button></a>
        </div>
        <header>
            <div className="navContainer">
                <div className="navLogo">
                    <h1>Academia Focus</h1>
                </div>
                <div className="navItems">
                    <ul>
                        <li><a href="#" className="isActive">Home</a></li>
                        <li><a href="#">Modalidades</a></li>
                        <li><a href="#">Preços</a></li>
                        <li><a href="#">Localização</a></li>
                        {/* <li><Link>Home</Link></li>
                        <li><Link>Modalidades</Link></li>
                        <li><Link>Preços</Link></li>
                        <li><Link>Localização</Link></li> */}
                    </ul>
                </div>
            </div>
            <div className="centeredText">
                <h1>Academia <span>Focus Fitness</span></h1>
                <p>A escolha certa</p>
                <button>Saiba Mais</button>
            </div>
        </header>
        <div className="modalidadesSection">
            <h1 className="confiraTitle" >Confira as modalidades</h1>
            <div className="modalidadesContainer">
                <div className="item item-muscu">
                    <Descr name="Musculação" descr="alguma descrição" imagem="../../imgs/bgMus.jpeg"/>
                </div>
                <div className="item item-box">
                    <Descr name="Boxing" descr="alguma descrição"/>
                </div>
                <div className="item item-muay">
                    <Descr name="MuayThay" descr="alguma descrição"/>
                </div>   
                <div className="item item-cross">
                    <Descr name="Crossfit" descr="alguma descrição"/>
                </div>                  
            </div>
        </div>
        <Preco />
    </div>
    )
  }
}
