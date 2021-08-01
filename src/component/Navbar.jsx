import { Link } from "react-router-dom";
import { Planet } from "react-planet";
import {
  FcBusinesswoman,
  FcHome,
  FcPortraitMode,
  FcPhone,
  FcPlus,
  FcMenu,
} from "react-icons/fc";
const Navbar = () => {
  const smoothscroll = () => {
    const footer = document.getElementById("footer");
    footer.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <nav>
      <Planet
        centerContent={<FcMenu size={40} />}
        hideOrbit
        dragablePlanet={true}
        dragRadiusPlanet={100}
        autoClose
        orbitRadius={50}
        bounceOnClose
        rotation={-20}
        bounceDirection="LEFT"
      >
        <button onClick={smoothscroll} className="nav-btn">
          <FcPhone size={25} title="Contact" />
        </button>
        <Link to="/about">
          <FcBusinesswoman title="About" size={25} />
        </Link>
        <Link to="/">
          <FcHome size={25} title="Home" />
        </Link>
        <div />
        <div />
        <div />
        <div />
      </Planet>
    </nav>
  );
};

export default Navbar;
