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
      <div className="CardUi_Container">
        <div className="CardUi">
          <div className="CardUi_Circle">
            <h2>Mision</h2>
          </div>
          <div className="CardUi_Content">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Aspernatur sed at temporibus natus mollitia earum consequatur
              velit ipsum? Aperiam porro quo sint fugit nemo aliquid unde vero
              esse inventore ducimus!
            </p>
          </div>
        </div>
        <div className="CardUi">
          <div className="CardUi_Circle">
            <h2>Vision</h2>
          </div>
          <div className="CardUi_Content">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Aspernatur sed at temporibus natus mollitia earum consequatur
              velit ipsum? Aperiam porro quo sint fugit nemo aliquid unde vero
              esse inventore ducimus!
            </p>
          </div>
        </div>
        <div className="CardUi">
          <div className="CardUi_Circle">
            <h2>Objetivos</h2>
          </div>
          <div className="CardUi_Content">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Aspernatur sed at temporibus natus mollitia earum consequatur
              velit ipsum? Aperiam porro quo sint fugit nemo aliquid unde vero
              esse inventore ducimus!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
