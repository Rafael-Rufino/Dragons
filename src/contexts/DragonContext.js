import { createContext, useState } from "react";
import FormModal from "../components/FormModal";
import api from "../services/api";
export const DragonContext = createContext();

export function DragonContextProvider({ children }) {
  const [openFormModal, setOpenFormModal] = useState(false);
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [id, setId] = useState(false);

  function handleEdit(id, name, type) {
    setName(name);
    setType(type);
    setId(id);
    setOpenFormModal(true);
  }
  function handleDetails(id, name, type) {
    const dragons = {
      name,
      type,
    };
    api.get(`dragon/${id}`, dragons);
    setName(name);
    setType(type);
    setId(id);

    setOpenFormModal(true);
  }

  function handleAdd() {
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
