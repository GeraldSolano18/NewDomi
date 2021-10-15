/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
// eslint-disable-next-line max-classes-per-file
import React, { Component } from "react";
import Particles from "react-particles-js";

import contacto from "../assets/static/contacto.jpg";
import datos from "../assets/static/Datos.svg";
import negocio from "../assets/static/Negocio.svg";
import "../assets/styles/views/Contactanos.scss";

class ImputControlado extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    text: "",
    color: "#E8E8E8",
  };

  Actualizar = (event) => {
    const text = event.target.value;
    let color = "green";

    if (text.trim() === "") {
      color = "#E8E8E8";
    }

    if (text.trim() !== "" && text.length < 5) {
      color = "red";
    }

    this.setState({ text, color });
    // Propagando datos al padre
    this.props.onChange(this.props.name, text);
  };

  render() {
    const estilos = {
      border: `2px solid ${this.state.color}`,
      width: "300px",
      height: "30px",
      borderRadius: "3px",
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "20px",
      textAlign: "center",
      fontSize: "15px",
      outline: "none",
      padding: "1.2rem 0",
    };
    return (
      <input
        type="text"
        value={this.state.text}
        onChange={this.Actualizar}
        style={estilos}
        placeholder={this.props.placeholder}
      />
    );
  }
}

class Contactanos extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    name: "",
    email: "",
    cedula: "",
    telefono: "",
    empresa: "",
    TipoNegocio: "Emprendedor",
  };

  actualizar = (name, text) => {
    this.setState({
      [name]: text,
    });
  };

  handleChange = (event) => {
    if (event.target.value === "Emprendedor") {
      console.log("hola");
    }
    this.setState({
      TipoNegocio: event.target.value,
    });
  };

  render() {
    const handleSubmit = (event) => {
      event.preventDefault();
    };
    const particleOPT = {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: "#ffffff",
        },
        size: {
          value: 1.5,
          random: false,
          anim: {
            speed: 30,
            size_min: 0.1,
            sync: false,
          },
          opacity: {
            value: 1000,
            random: false,
          },
        },
        line_linked: {
          enable: true,
          random: false,
          distance: 100,
          color: "#FFFFFF",
          opacity: 0.9,
        },
      },
    };

    return (
      <div>
        <div>
          <Particles className="particles" params={particleOPT} />
        </div>

        <img src={contacto} alt="" className="fotoxx" />

        <div className="containerwhite">
          <div className="contacto">
            <p className="contactoTitle">Formulario de contacto</p>
          </div>
          <div className="contacto">
            <p className="contactoP">
              Ingresa los datos correspodientes a tu negocio y alguien de
              nuestro equipo se pondra en contacto contigo
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="ContainerBoss">
              <div>
                <div className="Datos">
                  <img src={datos} alt="" />
                  Datos Generales
                </div>
                <ImputControlado
                  onChange={this.actualizar}
                  placeholder="Nombre Completo"
                  name="name"
                />
                <ImputControlado
                  onChange={this.actualizar}
                  placeholder="Tu Email"
                  name="email"
                />
                <ImputControlado
                  onChange={this.actualizar}
                  placeholder="Cedula"
                  name="cedula"
                />
                <ImputControlado
                  onChange={this.actualizar}
                  placeholder="Telefono"
                  name="telefono"
                />
              </div>
              <div>
                <div className="Datos">
                  <img src={negocio} alt="" />
                  Datos del negocio
                </div>
                <ImputControlado
                  onChange={this.actualizar}
                  placeholder="Nombre de la empresa"
                  name="empresa"
                />
                <select
                  value={this.state.TipoNegocio}
                  onChange={this.handleChange}
                  className="box"
                >
                  <option value="Negocio">Negocio</option>
                  <option value="Emprendedor">Emprendedor</option>
                </select>
                <div className="containerCheck">
                  ¿Qué productos ofrecerás en tu empresa?
                  <input type="checkbox" />
                </div>
              </div>
            </div>
            <button type="submit" className="sub">
              Enviar datos
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Contactanos;
