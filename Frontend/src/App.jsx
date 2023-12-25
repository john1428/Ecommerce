import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
// import LoginSignup from './pages/LoginSignup'
import Footer from "./components/Footer/Footer";
import ShopCategory from "./pages/ShopCategory";
import men_banner from "./assets/banner_mens.png";
import women_banner from "./assets/banner_women.png";
import kid_banner from "./assets/banner_kids.png";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { UserContextProvider } from "./context/UserContext";
function App() {
  // const [message, setMessage] = useState("");

  // useEffect(() => {
  //   async function Fetchapi() {
  //     try {
  //       const call1 = await fetch("http://localhost:7070/message");
  //       const res = await call1.json();
  //       setMessage(res);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  //   Fetchapi()
  // }, []);

  // fetch("http://localhost:7070/message")
  //   .then((res) => res.json())
  //   .then(data => setMessage(data))

  return (
    <>
      <BrowserRouter>
      <UserContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/mens"
            element={<ShopCategory banner={men_banner} category="men" />}
          />
          <Route
            path="/womens"
            element={<ShopCategory banner={women_banner} category="women" />}
          />
          <Route
            path="/kids"
            element={<ShopCategory banner={kid_banner} category="kid" />}
          />
          {/* <Route path='/product' element={<Shop/>}/> */}
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
        </UserContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
