import React from "react";

export default React.createContext({
  login: () => {},
  logout: () => {},
  user: null,
});
