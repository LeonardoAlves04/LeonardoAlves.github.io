import { useEffect } from "react";
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Checkout from "./scenes/checkout/Checkout";
import Confirmation from "./scenes/checkout/Confirmation";
import Navbar from "./scenes/global/Navbar";
import Home from "./scenes/home/Home";
import ItemDetails from "./scenes/itemDetailsPage/itemDetails";
import CartMenu from "./scenes/global/CartMenu";
import Footer from "./scenes/global/Footer";
import SignIn from "./scenes/singIn/SignIn";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';

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
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="item/:itemId" element={<ItemDetails />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="signIn" element={<SignIn />} />
          <Route path="checkout/success" element={<Confirmation />} />
        </Routes>
        <CartMenu />
        <Footer />
      </HashRouter>
      <ToastContainer position="bottom-center" autoClose={5000} />
    </div >
  );
}

export default App;
