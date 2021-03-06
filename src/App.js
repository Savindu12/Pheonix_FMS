import About from './components/About';
import AllInOne from './components/AllInOne';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar'
import Pricing from './components/Pricing';
import Flights from './components/Flights';
import Flights2 from './components/Flights2';
import Transaction from './components/Transactions';
import Support from './components/Support';
import Collections from './components/Collections';
import FlightApp from './components/FlightApp';
import { useState } from 'react';

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Transaction/>
      <FlightApp/>
      <Support />
      <AllInOne />
      <Flights />
      <Flights2 />
      <Collections />
      <Pricing />
      <Footer />
    </>
  );
}

export default App;
