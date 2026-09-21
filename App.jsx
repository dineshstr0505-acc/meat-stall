import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Meats from "./Meats";
import Carts from "./Carts";
import Contact from "./Contact";
import Review from "./Review";

import { CartProvider } from "./CartContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Meats" element={<Meats />} />
          <Route path="/carts" element={<Carts />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Review" element={<Review />} />
        </Routes>

      </BrowserRouter>
    </CartProvider>
  );
}

export default App;