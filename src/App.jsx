import Login from "./Components/Login/Login";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="bg-gradient-to-r from-darkPurple via-greyBlue to-purple h-screen">
        <div className="text-white text-4xl">Prueba 4</div>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
