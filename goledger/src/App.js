import HomePage from './Pages/HomePage';
import './App.css';
import NavBarComp from './Components/NavBar'
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavBarComp />
      <HomePage />
    </Router>
  );
}

export default App;
