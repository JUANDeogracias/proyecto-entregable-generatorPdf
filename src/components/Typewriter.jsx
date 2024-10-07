import React from "react";
import "../../style.css";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import TypewriterEffect from "typewriter-effect";

function Typewriter() {
  return (
    <div className="p-4 w-screen h-auto text-center">
      <h1
        className=" p-2 justify-center shadow rounded w-60 mx-auto h-[40px] font-bold md:justify-center sm:justify-center sm:mx-auto
      
      lg:mx-auto lg:justify-center"
      >
        {/* TypewriterEffect es una libreria de react que permite realizar el efecto de maquina de escribir */}
        <TypewriterEffect
          onInit={(typewriter) => {
            typewriter
              .typeString("PAGINA FACTURAS")
              .pauseFor(2000)
              .deleteAll()
              .typeString("PAGINA FACTURAS")
              .start();
          }}
        />
      </h1>
    </div>
  );
}

export default Typewriter;
