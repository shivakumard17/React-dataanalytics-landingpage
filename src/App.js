import React from "react";
import Analytics from "./Components/Analytics";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar";
import Newsletter from "./Components/Newsletter";


function App() {
  return (
    <div >
     <NavBar/>
     <Hero/>
     <Analytics/>
     <Newsletter/>
     <Cards/>
     <Footer/>
    
  
    </div>
  );
}

export default App;
