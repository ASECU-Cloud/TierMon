import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BattleArena from "./pages/BattleArena";
import Landing from "./pages/Landing";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { LanguageProvider } from "./providers/Language";

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <p className="text-xs absolute right-0 text-black z-10">Version: 0.0.0-alpha</p>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/battle" element={<BattleArena />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
