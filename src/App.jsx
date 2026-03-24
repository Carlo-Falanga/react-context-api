import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import AboutUs from "./pages/AboutUs";
import SingleProduct from "./pages/SingleProduct";
import Error404 from "./pages/Error404";
import BudgetProvider from "./components/BudgetProvider";

function App() {
  return (
    <>
      <BudgetProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<SingleProduct />}></Route>
              <Route path="/404" element={<Error404 />}></Route>
              <Route path="*" element={<Error404 />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </BudgetProvider>
    </>
  );
}

export default App;
