import developer from "../asset/developer.png";
import { Link } from "react-router-dom";
const Description = () => {
  return (
    <section className="banner">
      <div className="image-container">
        <img src={developer} className="image" alt="developer" />
      </div>
      <div className="description">
        <p>
          my name is <span className="name">farzaneh hadadi</span>{" "}
        </p>
        <div className="devider"></div>
        <p className="desc">
          I am a front-end web developer. My main areas of expertise include
          Javascript, ReactJS, HTML and CSS.
        </p>
        <Link className="about-btn" to="/about">
          about me
        </Link>
      </div>
    </section>
  );
};

export default Description;
