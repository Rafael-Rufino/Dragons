import { createContext, useState } from "react";
import FormModal from "../components/FormModal";
import api from "../services/api";
export const DragonContext = createContext();

export function DragonContextProvider({ children }) {
  const [openFormModal, setOpenFormModal] = useState(false);
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [id, setId] = useState(false);
  const [tipo, setTipo] = useState("");

  function handleEdit(id, name, type, tipo) {
    setTipo(tipo);
    setName(name);
    setType(type);
    setId(id);
    setOpenFormModal(true);
  }
  function handleDetails(id, name, type, tipo) {
    const dragons = {
      name,
      type,
    };
    api.get(`dragon/${id}`, dragons);
    setTipo(tipo);
    setName(name);
    setType(type);
    setId(id);

    setOpenFormModal(true);
  }

  function handleAdd(tipo) {
    setTipo(tipo);
    setOpenFormModal(true);
  }

  function handleClose() {
    if (name) {
      setName("");
    }
    if (type) {
      setType("");
    }
    setOpenFormModal(false);
  }

  function nameOnchange(event) {
    setName(event.target.value);
  }
  function typeOnchange(event) {
    setType(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const dragons = {
      name,
      type,
      createdAt: new Date(),
    };
    if (id) {
      api.put(`dragon/${id}`, dragons);
    } else {
      api.post("dragon", dragons);
    }
    setOpenFormModal(false);
  }

  function handleDelete(id) {
    api.delete(`dragon/${id}`);
  }

  return (
    <DragonContext.Provider
      value={{
        handleAdd,
        handleClose,
        handleEdit,
        handleSubmit,
        handleDelete,
        typeOnchange,
        name,
        setName,
        type,
        tipo,
        setType,
        nameOnchange,
        handleDetails,
        setId,
        id,
      }}
    >
      {children}
      {openFormModal && <FormModal />}
    </DragonContext.Provider>
  );
}
