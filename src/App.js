import './App.css';
import CreateFlashCard from './pages/CreateFlashCard';
import NavBar from './Components/NavBar';
import LogoBar from './Components/LogoBar';

function App() {
  return (
    <div className="App">
      <LogoBar/>
      <NavBar/>
      <CreateFlashCard/>
    </div>
  );
}

export default App;
