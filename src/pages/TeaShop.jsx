import teashop from "../asset/teashop.jpg";
import Navbar from "../component/Navbar";

const TeaShop = () => {
  return (
    <div>
      <Navbar />
      <article className="single-project">
        <div className="single-project-title">
          <h3>Lahijan tea</h3>
          <h5>web development</h5>
        </div>
        <div className="single-project-image-container">
          <div className="circle"></div>
          <img src={teashop} alt="tea shop" className="single-project-image" />
        </div>
        <div className="single-project-info">
          <p className="url">
            Project URL:&nbsp;
            <a
              href="https://hadadi-tea-shop.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              hadadi-tea-shop.netlify.app
            </a>
          </p>
          <p className="single-project-desc">
            The website was created using <strong>HTML5 and CSS</strong>.
          </p>
        </div>
      </article>
    </div>
  );
};

export default TeaShop;
