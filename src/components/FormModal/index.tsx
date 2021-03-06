import React, { useContext } from "react";
import { DragonContext } from "../../contexts/DragonContext";
import { IoClose, IoCheckmark } from "react-icons/io5";
import "../../styles/formModal.scss";

export default function FormModal() {
  const {
    handleClose,
    name,
    type,
    nameOnchange,
    tipo,
    typeOnchange,
    handleSubmit,
  } = useContext(DragonContext);

  return (
    <div id="containerForm">
      <div id="content">
        <header>
          {tipo === "Add" ? (
            <strong>Adicionar Dragon</strong>
          ) : tipo === "Details" ? (
            <strong>Detalhes Dragon</strong>
          ) : (
            <strong>Editar Dragon</strong>
          )}

          <button type="button" onClick={handleClose}>
            <IoClose size="25" />
          </button>
        </header>
        <form onSubmit={handleSubmit}>
          <main>
            <div>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Digite o name do dragon"
                value={name}
                onChange={nameOnchange}
              />
            </div>

            <div>
              <label htmlFor="type">Tipo</label>
              <input
                id="type"
                type="text"
                placeholder="Digite o tipo do dragon"
                value={type}
                onChange={typeOnchange}
              />
            </div>
          </main>
          <footer>
            {tipo !== "Details" && (
              <button type="submit">
                <IoCheckmark size="25" />
                Salvar
              </button>
            )}
          </footer>
        </form>
      </div>
    </div>
  );
}
