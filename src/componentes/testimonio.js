import React from "react";
import "../css/testimonio.css";

export default function Testimonio() {
  return (
    <div className="contenedor-testimonio">
      <figure className="fig-testimonio">
        <img
          className="img-testimonio"
          src={require("../imagenes/woman2.jpg")}
          alt="testimonio"
        ></img>
      </figure>
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">Emma Bostian en Suecia</p>
        <p className="cargo-testimonio">Ingeniera de Software en Spotify</p>
        <p className="texto-testimonio">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </div>
    </div>
  );
}
