/* eslint-disable import/prefer-default-export */
import React from "react";
import Bounce from "react-reveal/Bounce";

import "./style.scss";

export const CardUi = () => {
  return (
    <>
      <div className="Landing_con">
        <Bounce>
          <div className="mt-4 mb-2">
            <h1 className="title__h1 ">Conozca sobre nosotros</h1>
          </div>
        </Bounce>
      </div>
      <div className="title__text  my-3">
        En Nicaragua la mayor actividad económica se encuentra en el sector
        informal por lo que el crecimiento de micros, pequeñas y medianas
        empresas siempre es un punto a favor de la economía nicaragüense. Hoy en
        día las pymes en Nicaragua tienen que adaptarse a diversos cambios que
        suelen ser constantes por la globalización siendo estos factores
        importantes en su desarrollo.
      </div>
      <div className="CardUi_Container">
        <div className="CardUi">
          <div className="CardUi_Circle">
            <h2>Mision</h2>
          </div>
          <div className="CardUi_Content">
            <p>
              Desarrollar una empresa dedicada a la creación e implementación de
              sistemas desarrollados a la medida y servicios de mantenimiento y
              administración de la infraestructura en el mundo IT, apoyándonos
              permanentemente en criterios innovadores y tecnologías en
              evolución.
            </p>
          </div>
        </div>
        <div className="CardUi">
          <div className="CardUi_Circle">
            <h2>Vision</h2>
          </div>
          <div className="CardUi_Content">
            <p>
              En un mundo estrechamente interrelacionado por las tecnologías de
              información, ser líder global en la provisión de soluciones
              innovadoras de software y servicios de infraestructura en el mundo
              de IT.
            </p>
          </div>
        </div>
        <div className="CardUi">
          <div className="CardUi_Circle">
            <h2>Valores</h2>
          </div>
          <div className="CardUi_Content">
            <ul>
              <li> • Responsabilidad.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
