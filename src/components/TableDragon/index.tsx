import React, { useEffect, useState } from "react";
import Dragon from "../Dragon";
import api from "../../services/api";
import "../../styles/tableDragon.scss";
interface IDragon {
  id: string;
  name: string;
  type: string;
  createdAt: string;
}
export default function TableDragon() {
  const [dragons, setDragons] = useState<IDragon[]>([]);
  useEffect(() => {
    async function handedListAll() {
      const response = await api.get(`${"/dragon"}`);
      setDragons(response.data);
    }
    handedListAll();
  }, []);

  const dragonOrdenado = dragons.sort((a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0;
  });

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
            {dragonOrdenado.map((dragon: IDragon) => (
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
