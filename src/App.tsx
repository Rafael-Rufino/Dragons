import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import UserContextProvider from "../src/contexts/user-context-provider";
function App() {
  return (
    <Router>
      <UserContextProvider>
        <Routes />
      </UserContextProvider>
    </Router>
  );
}

export default App;
