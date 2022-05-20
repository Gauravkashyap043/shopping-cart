import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Product from "./components/Product";
import Contact from "./components/Contact";
import {
  Routes,
  Route,
  BrowserRouter,
  // Switch
} from "react-router-dom";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <>
      
      <BrowserRouter>
      <Header />
        <Routes>
          <Route exact path="/" element={<Home /> }/>
            <Route  path="/product" element={<Product />}/>
            <Route  path="/product/:id" element={<ProductDetails />}/>
            <Route  path="/about" element={<About />}/>
            <Route  path="/contact" element={<Contact />}/>
          
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
