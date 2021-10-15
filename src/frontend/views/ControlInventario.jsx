/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import Carrousel from "../components/Carrousel";
import Charts from "../components/Charts";
import "../assets/styles/views/ControlInventario.scss";

const ControlInventario = () => {
  return (
    <div>
      <Carrousel
        images={[
          "https://images.pexels.com/photos/256559/pexels-photo-256559.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "https://images.pexels.com/photos/95916/pexels-photo-95916.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        ]}
      />

      <div className="Chart_cart">
        <Charts />
        Recibi informes estadisticos basados en datos reales
        <p className="Chart_p">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos enim
          blanditiis provident quidem quisquam. Reiciendis nam ea voluptate
          aliquid soluta nesciunt dolor, maxime, sequi adipisci ducimus unde,
          quo possimus praesentium.
        </p>
      </div>
    </div>
  );
};
export default ControlInventario;
