import React, { useEffect, useState } from "react";
import "../../style.css";

function Card() {
  const [users, setUsers] = useState([]); // Aqui almaceno los usuarios de la api
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

  return (
    <div className="p-4">
      {loading ? (
        <p></p>
      ) : (
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="text-center py-2 px-4">Nombre</th>
              <th className="text-center py-2 px-4">Email</th>
              <th className="text-center py-2 px-4">Teléfono</th>
              <th className="text-center py-2 px-4">Dirección</th>
            </tr>
          </thead>
          <tbody>
            {/* Mapeamos la tabla con los usuarios que he cogido de el useState que al principio definí como array */}
            {users.map((user) => (
              <tr key={user.id} className="border-b">
                <td className="text-center py-2 px-4">{user.name}</td>
                <td className="text-center py-2 px-4">{user.email}</td>
                <td className="text-center py-2 px-4">{user.phone}</td>
                <td className="text-center py-2 px-4">
                  {user.address.street}, {user.address.city}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Card;
