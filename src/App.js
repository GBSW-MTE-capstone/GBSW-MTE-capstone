import Home from "./pages/home";
import "./style/global/index.sass";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;
