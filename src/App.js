import About from './components/About';
import AllInOne from './components/AllInOne';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar'
import Pricing from './components/Pricing';
import Transaction from './components/Transactions';
import Support from './components/Support'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Transaction/>
      <Support />
      <AllInOne />
      <Pricing />
      <Footer />
    </>
  );
}

export default App;
