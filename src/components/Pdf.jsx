import React, { useEffect, useState } from "react";
import "../../style.css";
import { jsPDF } from "jspdf";
import "jspdf-autotable";

function Pdf() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error("Error en la petición");
        }
        const data = await response.json();
        setUsers(data.slice(0, 10));
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener los usuarios:", error);
        setLoading(false);
      }
    };

    getUsers();
  }, []);

  /**
   * jsPDF es una api de react que permite generar pdf de el siguiente modo
   */
  const generarPdf = () => {
    const doc = new jsPDF();

    const columns = ["Nombre", "Email"];

    //asignamos a data los usuarios que tenemos definidos al principo como array
    const data = users.map((user) => [user.name, user.email]);

    doc.autoTable({
      startY: 30,
      head: [columns],
      body: data,
    });

    doc.save("factura.pdf");
  };

  return (
    <div>
      {loading ? (
        <p>Cargando usuarios...</p>
      ) : (
        <div className="mt-10">
          <button
            className="border border-solid rounded-full p-4 hover:bg-black hover:shadow-dark-2 hover:scale-125 hover:shadow-5-strong hover:text-white transition-all duration-500"
            onClick={generarPdf}
          >
            Generar PDF
          </button>
        </div>
      )}
    </div>
  );
}

export default Pdf;
