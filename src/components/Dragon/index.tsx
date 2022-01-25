import React, { useContext } from "react";
import { DragonContext } from "../../contexts/DragonContext";
import { FaEdit, FaPrescriptionBottle, FaSearch } from "react-icons/fa";
import "../../styles/dragon.scss";
interface IDragon {
  id: string;
  name: string;
  type: string;
  date: string;
}
export default function Dragon({ id, name, type, date }: IDragon) {
  const { handleEdit, handleDetails, handleDelete } = useContext(DragonContext);

  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{type}</td>
        <td>{new Intl.DateTimeFormat("pt-BR").format(new Date(date))}</td>
        <td>
          <div id="icons">
            <button onClick={() => handleDetails(id, name, type)}>
              <FaSearch size="20" />
            </button>
            <button onClick={() => handleEdit(id, name, type)}>
              <FaEdit size="20" />
            </button>

            <button onClick={() => handleDelete(id)}>
              <FaPrescriptionBottle size="20" />
            </button>
          </div>
        </td>
      </tr>
    </>
  );
}
