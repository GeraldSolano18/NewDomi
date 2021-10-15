import Zoom from "react-reveal/Zoom";
import React from "react";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";
import img from "../assets/static/logistc.png";
import img1 from "../assets/static/empresario.png";
import logo from "../assets/static/logo.svg";
import online from "../assets/static/icon_online.svg";
import bud from "../assets/static/icon_bud.svg";
import onboarding from "../assets/static/icon_onboarding.svg";
import api from "../assets/static/icon_api.svg";

import "../assets/styles/views/SobreRed.scss";

const SobreRed = () => {
  return (
    <div>
      <div className="container">
        <div className="contenido">
          <div className="seccion">
            <Fade>
              <p className="titulo">Sobre RedStore</p>
              <img className="header__img" src={logo} alt="logo" />
            </Fade>
          </div>

          <div className="contenido__">
            <Fade left>
              <p className="parrafo">
                La base de toda empresa comercial es la compra y venta de bienes
                o servicios; de aquí la importancia del manejo del inventario
                por parte de la misma. Este manejo contable permitirá a la PYME
                mantener el control oportunamente, así como también conocer al
                final del período contable un estado confiable de la situación
                económica de la misma
              </p>
            </Fade>
            <Fade right>
              <img className="img" src={img} alt="" />
            </Fade>
            <Fade left>
              <img className="img1" src={img1} alt="" />
            </Fade>

            <Fade right>
              <p className="parrafo">
                La base de toda empresa comercial es la compra y venta de bienes
                o servicios; de aquí la importancia del manejo del inventario
                por parte de la misma. Este manejo contable permitirá a la PYME
                mantener el control oportunamente, así como también conocer al
                final del período contable un estado confiable de la situación
                económica de la misma
              </p>
            </Fade>
          </div>
        </div>
      </div>
      <div className="why">
        <div className="wrapper">
          <Bounce>
            <h1 className="title__h1">¿Por qué elegirnos a nosotros?</h1>
          </Bounce>

          <div className="why__grid">
            <Zoom>
              <div className="why_item">
                <img src={api} alt="" />
                <h1 className="title__h2">Online Shop</h1>
                <p className="copy">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas
                  laboriosam culpa ipsam sapiente
                </p>
              </div>
            </Zoom>
            <Zoom>
              <div className="why_item">
                <img src={online} alt="" />
                <h1 className="title__h2">Online Shop</h1>
                <p className="copy">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas
                  laboriosam culpa ipsam sapiente
                </p>
              </div>
            </Zoom>
            <Zoom>
              <div className="why_item">
                <img src={bud} alt="" />
                <h1 className="title__h2">Online Shop</h1>
                <p className="copy">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas
                  laboriosam culpa ipsam sapiente, facere officia
                </p>
              </div>
            </Zoom>
            <Zoom>
              <div className="why_item">
                <img src={onboarding} alt="" />
                <h1 className="title__h2">Online Shop</h1>
                <p className="copy">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas
                  laboriosam culpa ipsam sapiente, facere officia
                </p>
              </div>
            </Zoom>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SobreRed;
