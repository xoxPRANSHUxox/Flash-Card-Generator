import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home"
import CreateNew from './Component/CreateNew/CreateNew'
import MyFlashCard from "./Component/My FlashCard/MyFlashCard";
import ViewCards from "./Component/My FlashCard/ViewCards";

function App() {
  return (
    <> 
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/CreateNew" element={<CreateNew/>} />
          <Route path="/MyFlashCard" element={<MyFlashCard/>} />
          <Route path="/ViewCards/:index" element={<ViewCards/>}/>
 
        </Routes>
      </Router>
    </>
  );
}

export default App;

