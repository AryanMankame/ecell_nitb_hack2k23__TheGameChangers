import "./components/styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Userland from "./components/Userland";
import Userauth from "./components/Userauth";
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Userauth />} />
          <Route path="/userland" element={<Userland />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
