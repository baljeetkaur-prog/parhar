import "./NotFoundPage.css";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Page Not Found – Parhar Hospital</title>
      </Helmet>

      <div className="notfound-container">
        <img
          src="/images/notfound_page.png"
          alt="Not Found"
          className="notfound-img"
        />

        <h1 className="notfound-title">Oops! Page Not Found</h1>
        <p className="notfound-text">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        <div className="notfound-btns">
          <button className="notfound-btn" onClick={() => navigate(-1)}>
            ← Go Back
          </button>

          <Link to="/">
            <button className="notfound-btn home-btn">Back to Home</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
