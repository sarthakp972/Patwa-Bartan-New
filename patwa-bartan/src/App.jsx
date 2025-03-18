import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PatwaNavbar from "./Components/PatwaNavbar";
import PatwaNavbar2 from "./Components/PatwaNavbar2";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import CategoryPage from "./Pages/CategoryPage";
import Cart from "./Pages/Cart"; // ✅ Import Cart page
import Details from "./Pages/Details"; // ✅ Import Product Details page
import AllProducts from "./Pages/AllProducts";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import SignUp from "./Authentication/Signup";
// import AddPital from "./FirebaseCheck/AddPitalData";

function App() {
  return (
    <Router>
      <PatwaNavbar />
      <PatwaNavbar2 />
        
      <Routes>
      <Route path="/all-products" element={<AllProducts />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/category/:category" element={<CategoryPage />} /> {/* ✅ Dynamic category route */}
        <Route path="/product/:productId" element={<Details />} /> {/* ✅ Product Details route */}
        <Route path="/cart" element={<Cart />} /> {/* ✅ Add Cart Page route */}
      </Routes>
      <Footer />
    {/* <SignUp/> */}
    </Router>
  );
}

export default App;