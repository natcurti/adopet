import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DefaultPage from "./pages/DefaultPage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Message from "./pages/Message&Profile/Message";
import Adoption from "./pages/Adoption";
import Profile from "./pages/Message&Profile/Profile";

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
          <Route path="perfil" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
