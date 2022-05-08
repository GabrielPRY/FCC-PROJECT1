import React from "react";
import "../css/testimonio.css";

export default function Testimonio(props) {
  return (
    <div className="contenedor-testimonio">
      <figure className="fig-testimonio">
        <img
          loading="lazy"
          className="img-testimonio"
          src={require(`../imagenes/${props.img}.jpg`)}
          alt={props.img}
        ></img>
      </figure>
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">
          <strong> {props.nombre}</strong> en {props.pais}
        </p>
        <p className="cargo-testimonio">
          {props.cargo} en <strong>{props.empresa}</strong>
        </p>
        <p className="texto-testimonio">{props.testimonio}</p>
      </div>
    </div>
  );
}
