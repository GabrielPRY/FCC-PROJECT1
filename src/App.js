import "./App.css";
import React, { Fragment } from "react";
import Testimonio from "./componentes/testimonio";

const testimonios = [
  {
    key: "1",
    img: "woman",
    nombre: "Emma Bostian",
    pais: "Suecia",
    cargo: "Ingeniera de Software",
    empresa: "Spotify",
    testimonio: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident,{" "}
        <strong>
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        </strong>
      </>
    ),
  },
  {
    key: "2",
    img: "woman1",
    nombre: "Petra Spotls",
    pais: "Rusia",
    cargo: "Ingeniera de Software",
    empresa: "Amazon",
    testimonio: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam,{" "}
        <strong>
          {" "}
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat{" "}
        </strong>
        . Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </>
    ),
  },
  {
    key: "3",
    img: "woman2",
    nombre: "Perla Castro",
    pais: "España",
    cargo: "Ingeniera de Software",
    empresa: "OnlyFans",
    testimonio: (
      <>
        <strong>Lorem ipsum dolor sit amet</strong>, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat . Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum.
      </>
    ),
  },
];

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Esto es lo que dicen nuestros clientes:</h1>
        {testimonios.map((testimonio) => (
          <Testimonio
            key={testimonio.key}
            img={testimonio.img}
            nombre={testimonio.nombre}
            pais={testimonio.pais}
            cargo={testimonio.cargo}
            empresa={testimonio.empresa}
            testimonio={testimonio.testimonio}
          ></Testimonio>
        ))}
      </div>
    </div>
  );
}

export default App;

//02:48:00
