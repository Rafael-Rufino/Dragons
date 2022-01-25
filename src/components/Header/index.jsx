import React, { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import ButtonAddModal from "../ButtonAddModal";
import "../../styles/header.scss";
import Context from "../../contexts/use-context";

export default function Header() {
  const UserContext = useContext(Context);

  return (
    <div id="container">
      <header>
        <h2>Dragons</h2>
        <div className="user">
          <FaUserCircle size="22" />
          {UserContext.user && <strong>Olá, {UserContext.user.name}</strong>}
          <button onClick={UserContext.logout}>Sair</button>
        </div>
      </header>
      <ButtonAddModal />
    </div>
  );
}
