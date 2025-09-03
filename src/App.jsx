import { Route, Routes } from "react-router";
import Nav from "./Components/Nav";
import Error from "./Pages/Error";
import Home from "./Pages/Home";
import Actions from "./Components/Nested/SideBar";
import About from "./Pages/About";
import Products from "./Pages/Products";
import SideBar from "./Components/Nested/SideBar";
import ProductDetails from "./Pages/ProductDetails";
function App() {
  return (
    <>
      <div className="App w-full h-full">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />}>
            <Route path=":name" element={<SideBar />} />
          </Route>
            <Route path=":id" element={<ProductDetails />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
