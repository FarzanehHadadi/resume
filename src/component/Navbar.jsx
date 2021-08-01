import { Link } from "react-router-dom";
const Navbar = () => {
  const smoothscroll = () => {
    const footer = document.getElementById("footer");
    footer.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <nav>
      <Link className="nav-link" to="/">
        Home
      </Link>
      <Link to="/about" className="nav-link">
        About
      </Link>
      <button onClick={smoothscroll} className="nav-link contact-btn">
        Contact
      </button>
    </nav>
  );
};

export default Navbar;
