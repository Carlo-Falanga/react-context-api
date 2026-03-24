import { Link } from "react-router-dom";

export default function Product({ product }) {
  return (
    <>
      <div className="col g-3">
        <div className="card h-100 card_shadow">
          <img
            src={product.image}
            className="card-img-top p-4 object-fit-contain bg-light card_items_img"
            alt="Product image"
          />
          <div className="card-body d-flex flex-column justify-content-between gap-2">
            <h5 className="card-title card_item_title fw-semibold">
              {product.title}
            </h5>
            <p className="card-subtitle text-body-secondary">
              {product.category}
            </p>
            <p className="card-text card_items_description">
              {product.description}
            </p>
            <p className="">
              {product.rating.rate} ⭐ - {product.rating.count} reviews
            </p>
            <p className="fs-3 fw-bold mb-0">{product.price} $</p>
            <Link className="btn btn-outline-primary rounded-pill px-4 py-2" to={`/products/${product.id}`}>Buy</Link>
          </div>
        </div>
      </div>
    </>
  );
}
