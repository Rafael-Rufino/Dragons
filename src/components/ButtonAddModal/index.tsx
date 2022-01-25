import React, { useContext } from "react";
import { DragonContext } from "../../contexts/DragonContext";
import { FaPlusCircle } from "react-icons/fa";
import "../../styles/buttonAddModal.scss";

const ButtonAddModal: React.FC = () => {
  const { handleAdd } = useContext(DragonContext);
  return (
    <div className="container">
      <button type="button" onClick={handleAdd}>
        Adicionar Dragon
        <FaPlusCircle className="icon" size="20" />
      </button>
    </div>
  );
};

export default ButtonAddModal;
