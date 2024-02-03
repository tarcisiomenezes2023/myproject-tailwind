import './App.css';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Contact from './Components/Contact';
import HowToBook from './Components/HowToBook';
import NewRequest from './Components/NewRequest';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/how-to-book" element={<HowToBook />} />
          <Route path='/new-request' element={<NewRequest />} />
          </Routes>
      </Router>
    </div>
  )
}

export default App

