import './App.css'
import List from './components/List/List'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';

function App() {

  return (
    <>
      <Router>
          <NavBar/>
          <Routes>
            <Route path='/' exact Component={Home}/>
          </Routes>
      </Router>
    </>
  )
}

export default App
