import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./Components/Footer/Footer";
import Nav from "./Components/NavBar/Nav";
import Home from "./Components/Home/Home";
import BookingPage from "./Components/BookingPage/BookingForm"

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/book' element={<BookingPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
