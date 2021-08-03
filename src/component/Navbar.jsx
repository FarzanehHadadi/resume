import { Link } from "react-router-dom";
import { Planet } from "react-planet";
import { FcBusinesswoman, FcHome, FcPhone, FcMenu } from "react-icons/fc";
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
        // centerContent={<FcMenu size={40} />}
        centerContent={<FcMenu style={{ display: "none" }} />}
        hideOrbit={true}
        hidePlanet={true}
        dragablePlanet={true}
        dragRadiusPlanet={100}
        orbitRadius={50}
        bounceOnClose
        rotation={-40}
        bounceDirection="LEFT"
        open={true}
        mass={5}
      >
        <button onClick={smoothscroll} className="nav-contact">
          <FcPhone size={25} title="Contact" />
        </button>
        <a href="/about">
          <FcBusinesswoman title="About" size={25} />
        </a>
        <a href="/">
          <FcHome size={25} title="Home" />
        </a>
        <div />
        <div />
        <div />
        <div />
      </Planet>
    </nav>
  );
};

export default Navbar;
