import React from "react";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Acordeon from "../components/Acordeon";
import logo from "../assets/static/logo.svg";
import composicion from "../assets/static/composicion.jpg";

import "../assets/styles/views/Emprendedores.scss";

const Emprededores = () => {
  return (
    <div className="container">
      <div className="contenido">
        <div className="seccion">
          <p className="titulo">Emprendedores</p>
          <img className="header__img" src={logo} alt="logo" />
        </div>
        <div>
          <Zoom>
            <p className="pBlue">
              DomiTiendas permite a los comercios Nicaraguense maximimar
              beneficios y evitar completamente las perdidasmediante un sistema
              de control
            </p>
          </Zoom>

          <div className="padre">
            <Fade left>
              <div className="martop">
                <Acordeon
                  titulo="Aumenta tus ventas"
                  contenido="Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final. Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final. "
                />
                <Acordeon
                  titulo="Haz que todos conozcan tu producto!"
                  contenido="Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final"
                />
                <Acordeon
                  titulo="Fidelizacion con tus clientes"
                  contenido=" Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final."
                />
              </div>
            </Fade>
            <Fade right>
              <div>
                <img src={composicion} alt="" className="imgMargin" />
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emprededores;
