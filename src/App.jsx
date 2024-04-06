import Login from "./Components/Login/Login";
import { Routes, Route } from "react-router-dom";
import Register from "./Components/Register/Register";
import Recovery from "./Components/Recovery/Recovery";

function App() {
  return (
    <>
      <div className="bg-gradient-to-r from-darkPurple via-greyBlue to-purple h-full">
        <div className="text-white text-4xl">Taller Ademass</div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/recovery" element={<Recovery />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
