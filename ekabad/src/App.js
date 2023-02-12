import "./components/styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Userland from "./components/Userland";
import Userauth from "./components/Userauth";
import GuideMap from './components/guideMap';
import Dashboard from "./components/Dashboard";
import Listings from "./components/Listings";
import ThreeBtn from "./components/ThreeBtn";
import Form from "./components/Form";
import Info from "./components/Info";
import Test from "./components/Test";
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
          <Route path='/list' element={<Listings />} />
          <Route path="/t" element = {<Test />} />
          <Route path="/threeBtn" element ={<ThreeBtn />} />
          <Route path="/form" element ={<Form />} />
          <Route path="/info" element ={<Info />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
