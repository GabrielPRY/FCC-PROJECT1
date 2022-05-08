import "./App.css";
import React, { Fragment } from "react";
import Testimonio from "./componentes/testimonio";

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Esto es lo que dicen nuestros clientes:</h1>
        <Testimonio
          key="1"
          img="woman"
          nombre="Emma Bostian"
          pais="Suecia"
          cargo="Ingeniera de Software"
          empresa="Spotify"
          testimonio={
            <>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat . Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.{" "}
              <strong> Excepteur sint occaecat cupidatat non proident</strong>,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </>
          }
        ></Testimonio>
        <Testimonio
          key="2"
          img="woman1"
          nombre="Olga Lee"
          pais="Noruega"
          cargo="Ingeniera de Software"
          empresa="Amazon"
          testimonio={
            <>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,
              <strong>
                {" "}
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat
              </strong>
              . Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </>
          }
        ></Testimonio>
        <Testimonio
          key="3"
          img="woman2"
          nombre="Sofía Llanos"
          pais="España"
          cargo="Ingeniera de Software"
          empresa="OnlyFans"
          testimonio={
            <>
              <strong>Lorem ipsum dolor sit amet</strong>, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </>
          }
        ></Testimonio>
      </div>
    </div>
  );
}

export default App;

/* RETOS:
  
  -HACER LOS PROPS EN UN OBJETO SEPARADO Y MAPEARLO
  -HACER RESPONSIVO
*/

//02:48:00
