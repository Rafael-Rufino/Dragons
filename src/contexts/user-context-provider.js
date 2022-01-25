import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Context from "./use-context";
const IsLoginPage = () => window.location.href.indexOf("login/") !== -1;

function UserContextProvider({ children }) {
  let history = useHistory();
  //const [user, setUser] = useState(null);

  const [user, setUser] = useState(() => {
    const storagedDragons = localStorage.getItem("@GithubDragons:user");
    if (storagedDragons) {
      return JSON.parse(storagedDragons);
    }
  });

  useEffect(() => {
    localStorage.setItem("@GithubDragons:user", JSON.stringify(user));
  }, [user]);

  function login({ user, password }) {
    if (user === "Rafael" && password === "123456") {
      setUser({ email: user, name: "Rafael Rufino" });
      history.push("/");
    } else {
      localStorage.removeItem("@GithubDragons:user");
      setUser(null);
      alert("usuario e senha invalida!");
    }
  }

  function logout() {
    localStorage.removeItem("@GithubDragons:user");
    setUser(null);
  }

  useEffect(() => {
    if (!user && !IsLoginPage()) {
      history.push("/login");
    }
  });

  return (
    <Context.Provider value={{ login, logout, user }}>
      {children}
    </Context.Provider>
  );
}

export default UserContextProvider;
