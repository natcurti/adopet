import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DefaultPage from "./pages/DefaultPage";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route index element={<Home />} />
          <Route path="cadastro" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
