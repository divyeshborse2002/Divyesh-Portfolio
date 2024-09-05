import { useState, useEffect } from 'react';
import './App.css';
import About from './Components/About/About';
import Contact from './Components/contact/Contact';
import Footer from './Components/Footer/Footer';
import Herosection from './Components/Herosection';
import Navbar from './Components/Navbar';
import Project from './Components/Work/Project';
import Loader from './Components/Loader/Loader';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {loading ? (
      <Loader />
      ) : (
        <div style={{ position: "relative" }}>
          <Navbar />
          <Herosection />
          <About />
          <Project />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
