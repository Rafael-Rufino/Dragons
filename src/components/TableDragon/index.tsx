import React, { useEffect, useState } from "react";
import Dragon from "../Dragon";
import api from "../../services/api";
import "../../styles/tableDragon.scss";
interface Idragon {
  id: string;
  name: string;
  type: string;
  createdAt: string;
}
export default function TableDragon() {
  const [dragons, setDragons] = useState([]);
  useEffect(() => {
    async function handedListAll() {
      const response = await api.get(`${"/dragon"}`);
      setDragons(response.data);
    }
    handedListAll();
  }, []);

  return (
    <div id="container">
      <main>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Tipo</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            {dragons.map((dragon: Idragon) => (
              <Dragon
                key={dragon.id}
                id={dragon.id}
                name={dragon.name}
                type={dragon.type}
                date={dragon.createdAt}
              />
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}
