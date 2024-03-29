/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import ImpactoCard from "../components/ImpactoCard";
import BannerHero from "../components/BannerHero";
import banner from "../assets/static/bannerComercio.png";
import Footer from "../components/Footer";
import { CardUi } from "../components/CardUi";
import Slides from "../components/Slides";
import Emprendedores from "../assets/static/Emprendedores.png";
import "../assets/styles/App.scss";

const images = [
  {
    id: "1x",
    src: "https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    titulo: "Titulo 1 sub",
  },
  {
    id: "2xx",
    src: "https://image.freepik.com/foto-gratis/vista-frontal-concepto-compras-linea_23-2148625666.jpg",
    titulo: "Titulo 2 subtit",
  },
  {
    id: "2axs",
    src: "https://cdn.pixabay.com/photo/2017/03/13/17/26/ecommerce-2140603_960_720.jpg",
    titulo: "Titulo 2 subtit",
  },
  {
    id: "2ax",
    src: "https://cdn.pixabay.com/photo/2018/07/25/18/36/ecommerce-3562005_960_720.jpg",
    titulo: "Titulo 2 subtit",
  },
  {
    id: "3xxx",
    src: "https://images.pexels.com/photos/2988232/pexels-photo-2988232.jpeg?cs=srgb&dl=pexels-energepiccom-2988232.jpg&fm=jpg",
    titulo: "Titulo 3 subtitulos",
    // eslint-disable-next-line comma-dangle
  },
  // eslint-disable-next-line comma-dangle
];
const Home = () => {
  return (
    <div className="home-container mt-3">
      <div className="sectionScroll">
        <Slides interval={8000} images={images} />
        <img src={banner} className="banner" alt="Banner" />
      </div>
      <div className="sectionScroll pt-2 ">
        <CardUi />
      </div>
      <div className="sectionScroll">
        <div>
          <div className="Landing_con">
            <Bounce>
              <div className="mt-">
                <h1 className="title__h1 ">Conozca sobre nosotros</h1>
              </div>
            </Bounce>
          </div>
        </div>
        <div className="two_ph mt-4 mb-5">
          <Fade left>
            <ImpactoCard
              title="Impacto Social"
              content="Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías
            Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías
            Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones"
              claseCss="two_1"
            />
          </Fade>
          <Fade right>
            <ImpactoCard
              title="Impacto economico"
              content="En el contexto que nos encontramos hoy en día muchas empresas han tenido que digitalizar, la digitalización hoy en día ha sido vital para muchas empresas para controlar sus operaciones de una manera centralizada, como también ha sido herramientas para los emprendedores de darse a conocer en el mundo digital con el fin de aumentar sus ventas y abrirse al mundo. Hoy en día existen muchas empresas que suelen brindar servicios integrales pero tras las encuesta que hemos realizado muchas PYMES nos han  manifestado que los costos de dichas soluciones suelen ser muy altas, como también no les brinda la retroalimentación necesaria para tomar decisiones que les ayude a optimizar sus procesos o reducir sus costos con el fin de generarles mayores ingresos."
              claseCss="two_2"
            />
          </Fade>
        </div>
      </div>

      <div className="sectionScroll">
        <Fade>
          <BannerHero />
        </Fade>
        <img src={Emprendedores} className="banner" alt="Banner" />
        <Fade>
          <Footer />
        </Fade>
      </div>
    </div>
  );
};
export default Home;
