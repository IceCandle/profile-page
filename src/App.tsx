import './App.css';

import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import Navbar from './Navbar';
import Projects from './Projects';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Header />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
