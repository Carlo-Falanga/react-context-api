import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import Loader from "../components/Loader";

export default function SingleProduct() {
  const [product, setProduct] = useState(null);
  const [direction, setDirection] = useState(1);
  const { id } = useParams();
  const navigate = useNavigate();

  const api_url = `https://fakestoreapi.com/products/${id}`;

  useEffect(() => {
    axios
      .get(api_url)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        navigate("/404");
        console.log(err);
      });
  }, [id, navigate]);

  const productId = Number(id);
  const prevId = productId - 1;
  const nextId = productId + 1;
  const maxId = 20;

  function goPrev() {
    setDirection(-1);
    navigate(`/products/${prevId}`);
  }

  function goNext() {
    setDirection(1);
    navigate(`/products/${nextId}`);
  }


// Direction-based product transition using Framer Motion (AI-assisted)
  const slideVariants = {
    initial: (direction) => ({
      opacity: 0,
      x: direction > 0 ? 30 : -30,
    }),
    animate: {
      opacity: 1,
      x: 0,
    },
    exit: (direction) => ({
      opacity: 0,
      x: direction > 0 ? -30 : 30,
    }),
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {product === null && <Loader />}

        {product !== null && (
          <section>
            <div className="container">

              <motion.div
                key={id}
                variants={slideVariants}
                custom={direction}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="row row-cols-1 row-cols-lg-2 text-center text-lg-start g-5 my-5 py-5"
              >
                <div className="col">
                  <img
                    className="w-75"
                    src={product.image}
                    alt={product.title}
                  />
                </div>
                <div className="col">
                  <div className="text-end text-center my-3 text-lg-end ">
                    <button
                      onClick={goPrev}
                      className="btn mx-1"
                      disabled={productId === 1}
                    >
                      <i className="bi bi-caret-left-fill"></i>
                    </button>
                    <button
                      onClick={goNext}
                      className="btn mx-1"
                      disabled={productId === maxId}
                    >
                      <i className="bi bi-caret-right-fill"></i>
                    </button>
                  </div>
                  <h3>{product.title}</h3>
                  <span className="fw-bold">{product.price} $</span>
                  <p className="py-4">{product.description}</p>
                  <Link
                    className="btn btn-primary rounded-pill mx-3 px-4 py-2"
                    to={"/CiaoLuigi&Camilla"}
                  >
                    Add to cart
                  </Link>
                </div>
              </motion.div>
            </div>
          </section>
        )}
      </AnimatePresence>
    </>
  );
}
