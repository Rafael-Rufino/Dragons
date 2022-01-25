import React, { useRef, useContext } from "react";
import illustrationImg from "../../assets/image/dragons.jpg";
import "../../styles/button.scss";
import "../../styles/signIn.scss";
import { Button } from "../../components/Button";
import Context from "../../contexts/use-context";

export function SignIn() {
  const inputUser = useRef(null);
  const inputPass = useRef(null);
  const UseContext = useContext(Context);

  function logar() {
    const user = inputUser.current.value;
    const password = inputPass.current.value;
    UseContext.login({ user, password });
  }
  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Ilustração de imagens" />
      </aside>
      <main>
        <div className="main-content">
          <h1>Dragons</h1>
          <div className="separator">Faça seu login</div>
          <form onSubmit={logar}>
            <input ref={inputUser} type="text" placeholder="Username" />
            <input ref={inputPass} type="password" placeholder="Password" />
            <Button type="submit">Entrar</Button>
          </form>
        </div>
      </main>
    </div>
  );
}
