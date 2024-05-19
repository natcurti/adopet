import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DefaultPage from "./pages/DefaultPage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Message from "./pages/Message";
import Adoption from "./pages/Adoption";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route index element={<Home />} />
          <Route path="cadastro" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="mensagem" element={<Message />} />
          <Route path="animais-para-adocao" element={<Adoption />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
