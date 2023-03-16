import { Home, About, Services, Tours } from './pages/index';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Tours />
      <Footer />
    </>
  );
}

export default App;
