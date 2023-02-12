import "./components/styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Userland from "./components/Userland";
import Userauth from "./components/Userauth";
// import GuideMap from './components/guideMap';
import MapBox from "./components/testMap";
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Userauth />} />
          <Route path="/userland" element={<Userland />} />
          {/* <Route path="/maps" element={<GuideMap />} /> */}
          <Route path='/test' element={<MapBox />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
