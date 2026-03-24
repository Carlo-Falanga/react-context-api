import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Product from "../components/Product";
import Loader from "../components/Loader";
import BudgetContext from "../context/BudgetContext";

export default function Products() {
  const [products, setProducts] = useState(null);
  const { budgetMode } = useContext(BudgetContext);

  function getProducts() {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProducts(res.data);
    });
  }

  useEffect(getProducts, []);

  const visibleProducts = products ?
    products.filter((product) =>{
      if(!budgetMode){
          return true
      }
      return product.price <= 30
  })
  : [];

  return (
    <main>
      <section>
        <div className="container text-center my-5 py-5">
          <h1 className="fw-bolder products_title">Our Products</h1>
          <p className="text-secondary-emphasis">
            Discover a curated selection of products designed for everyday life
            and style.
          </p>
        </div>
      </section>

      <section>
        {products === null && <Loader />}
        {products !== null && (
          <div className="container my-5">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
              {visibleProducts.map((product) => (
                <Product product={product} key={product.id}></Product>
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
