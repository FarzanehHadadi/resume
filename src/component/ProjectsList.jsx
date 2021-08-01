import { Link } from "react-router-dom";
import tea from "../asset/tea.png";
const ProjectsList = () => {
  return (
    <section className="section">
      {/* title */}
      <div className="projects-title">
        <h2>projets</h2>
        <div className="animate-divider"></div>
        <p>
          I’m always excited to start new projects. If you’ve got an idea you
          need help bringing to reality, let me know!
        </p>
      </div>
      {/* carts and cart items */}
      <div className="projects-list">
        {/* project 1 */}
        <Link className="project" to="/onlineshop">
          <div className="project-image-container">
            <img
              src={tea}
              alt="hadadi-tea.netlify.app"
              className="project-img"
            />
          </div>
          <p className="project-info">
            This project is made by HTML and CSS. it is fully responsive. this
            website was designed for a tea shop
          </p>
        </Link>
        {/* end of project 1 */}
        {/* project 2 */}
        <Link className="project" to="/chatwithme">
          <div className="project-image-container">
            <img
              src={tea}
              alt="hadadi-tea.netlify.app"
              className="project-img"
            />
          </div>
          <p className="project-info">
            This project is made by HTML and CSS. it is fully responsive. this
            website was designed for a tea shop
          </p>
        </Link>
        {/* end of project 2 */}
        {/* project 3 */}
        <Link className="project" to="/teashop">
          <div className="project-image-container">
            <img
              src={tea}
              alt="hadadi-tea.netlify.app"
              className="project-img"
            />
          </div>
          <p className="project-info">
            This project is made by HTML and CSS. it is fully responsive. this
            website was designed for a tea shop
          </p>
        </Link>
        {/* end of project 3 */}
      </div>
    </section>
  );
};

export default ProjectsList;
