import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home"
import CreateNew from './Component/CreateNew/CreateNew'
import MyFlashCard from "./Component/My FlashCard/MyFlashCard";
function App() {
  return (
    <> 
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/CreateNew" element={<CreateNew/>} />
          <Route path="/MyFlashCard" element={<MyFlashCard/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

