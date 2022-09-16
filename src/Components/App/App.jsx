import "./App.css";
import Navbar from "../Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./../Home/Home";
import Details from "./../Details/Details";
import Footer from "../Footer/Footer";
import { ProductContextProvider } from "./../ProductContext/ProductContext";

function App() {
  return (
    <div className="App">
      <div className="allButFooter">
        <Navbar></Navbar>

        <ProductContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="Details" element={<Details />} />
            <Route path="*" element={<h2>not Found</h2>} />
          </Routes>
        </ProductContextProvider>
      </div>

  
        <Footer></Footer>
     
    </div>
  );
}

export default App;
