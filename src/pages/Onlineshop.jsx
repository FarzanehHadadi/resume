import onlineshop from "../asset/onlineshop.jpg";
import Navbar from "../component/Navbar";

const Onlineshop = () => {
  return (
    <div>
      <Navbar />
      <article className="single-project">
        <div className="single-project-title">
          <h3>Online Shop</h3>
          <h5>web development</h5>
        </div>
        <div className="single-project-image-container">
          <div className="circle"></div>
          <img
            src={onlineshop}
            alt="online shop"
            className="single-project-image"
          />
        </div>
        <div className="single-project-info">
          <p className="url">
            Project URL:&nbsp;
            <a
              href="https://hadadi-onlineshop.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              hadadi-onlineshop.netlify.app
            </a>
          </p>
          <p className="single-project-desc">
            This project is made by ReactJS. it is fully responsive. in this
            website i used react hooks. also i used styled-component for styling
            and Auth0 for authentication.
          </p>
        </div>
      </article>
    </div>
  );
};

export default Onlineshop;
