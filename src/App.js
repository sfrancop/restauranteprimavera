import React from 'react';
import './App.css';
import commentsJson from "./comments.json"
import CommentForm from './components/CommentForm';
import QuienesSomos from './components/QuienesSomos';
import Equipo from "./components/Equipo"
import ComentariosDestacados from "./components/ComentariosDestacados"
import ContactComponent from "./components/ContactComponent"

import "./components//styles/main.css"
import "./components//styles/bootstrap.min.css"
import "./components//styles/estilo.css"
import "./components//styles/estilos.css"
import "./components//styles/style.css"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Component } from 'react';
import comments from './components/HistorialReservas';


/* --------------------------------
Principal function, here you write the componentes to return in the
main app and their props
-------------------------------- */

class App extends Component{
  state = {
    comments: commentsJson
  }

  addComment = (name, comment) =>{
    const newComment = {
      name: name,
      comment: comment
    }
    this.setState({
      comments: [...this.state.comments, newComment]
    })
  }

  render() {
    return <div>
    <Router>
      <div>
        <nav  class="navbar navbar-expand-lg navbar-light p-3">
            <div class="container correr">
              <a class="navbar-brand" href="#">
                  <span class="fs-5 text-primary fw-bold"></span>
              </a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a href="https://sfrancop.github.io/restprimavera/index.html" class="nav-link text-light" aria-current="page">Inicio</a>
                  </li>
                  <li class="nav-item">
                    <Link to="/nosotros" class="nav-link text-light" aria-current="page" href="Nosotros.html">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nosotros</Link>
                  </li>
                  <li class="nav-item">
                  <a href="https://sfrancop.github.io/restprimavera/menú.html" class="nav-link text-light" aria-current="page">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Menú</a>
                  </li>
                  <li class="nav-item">
                  <a href="https://sfrancop.github.io/restprimavera/Servicios.html" class="nav-link text-light" aria-current="page">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Servicios</a>
                  </li>
                  <li class="nav-item">
                    <Link to="/contactanos" class="nav-link text-light" href="contactanos.html">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Contáctanos</Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/historialreservas" class="nav-link text-light" href="contactanos.html">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Comentarios</Link>
                  </li>
                </ul>
              </div>
            </div>
        </nav>

        <Switch>
          <Route path="/nosotros">
            <div>
              <QuienesSomos/>
              <Equipo/>
              <ComentariosDestacados/>
            </div>
          </Route>
          <Route path="/menu">
            menú
          </Route>
          <Route path="/servicios">
            servicios
          </Route>
          <Route path="/contactanos">
            <ContactComponent/>
          </Route>
          <Route path="/historialreservas">
            <CommentForm addComment={this.addComment}/>
            {this.state.comments.map(e => <div class="parrafo"><h1>{e.name}</h1><p>{e.comment}</p></div>)}
          </Route>
          <Route path="https://sfrancop.github.io/restprimavera/index.html">
            <div>
              Inicio
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  }
}

export default App;