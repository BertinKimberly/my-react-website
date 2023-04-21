import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <Router>
         <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
         <Footer/>
       </Router>
    </div>
  );
}

export default App;
