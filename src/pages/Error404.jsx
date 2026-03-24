import { Link } from "react-router-dom";

export default function Error404() {
  return (
    <>
      <section>
        <div className="container">
          <div className="row my-5 py-5 text-center">
            <div className="col">
              <h1 className="fw-bold">Oops! Page not found</h1>
              <p>
                The page you're looking for doesn't exist or may have been
                moved. You can go back to the homepage or continue browsing our
                products.
              </p>
              <Link className="btn btn-primary my-3 rounded-pill mx-3 px-4 py-2" to={'/'}>Return to Home Page </Link>
              <Link className="btn btn-primary my-3 rounded-pill mx-3 px-4 py-2" to={'/products'}>Return to Product Page </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
