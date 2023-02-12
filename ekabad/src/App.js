import "./components/styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Userland from "./components/Userland";
import Userauth from "./components/Userauth";
import GuideMap from './components/guideMap';
import Dashboard from "./components/Dashboard";
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Userauth />} />
          <Route path="/userland" element={<Userland />} />
          {/* <Route path="/maps" element={<GuideMap />} /> */}
          <Route path='/test' element={<GuideMap pickup = {[12.23,23]} dropoff = {[13.3,10.34]} />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
