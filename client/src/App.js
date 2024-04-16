import "./App.css";
import Transactions from "./pages/Transactions/Transactions";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter ,Route,Routes} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Transactions/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
