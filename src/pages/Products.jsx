import axios from "axios";
import { useEffect, useState } from "react";
import Product from "../components/Product";
import Loader from "../components/Loader";

export default function Products() {
  const [products, setProducts] = useState(null);

  function getProducts() {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProducts(res.data);
    });
  }

  useEffect(getProducts, []);

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
        {products === null && <Loader/>}
        {products !== null && (

        <div className="container my-5">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
            {products.map((product) => (
              <Product product={product} key={product.id}></Product>
            ))}
          </div>
        </div>
        )}
      </section>
    </main>
  );
}
