import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Checkout from "./scenes/checkout/Checkout";
import Confirmation from "./scenes/checkout/Confirmation";
import Navbar from "./scenes/global/Navbar";
import Home from "./scenes/home/Home";
import ItemDetails from "./scenes/itemDetailsPage/itemDetails";
import CartMenu from "./scenes/global/CartMenu";
import Footer from "./scenes/global/Footer";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])

  return null;
}

function App() {
  return (
    <div className="app">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="item/:itemId" element={<ItemDetails />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="checkout/success" element={<Confirmation />} />
        </Routes>
        <CartMenu />
        <Footer />
      </BrowserRouter>
    </div >
  );
}

export default App;
