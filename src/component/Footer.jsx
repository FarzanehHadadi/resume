import { FaEnvelope, FaMobileAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="contact">
        <h2>contact me</h2>
        <p className="info">
          <FaEnvelope className="footer-icon" fill="#82b0a9" size="17" />{" "}
          farzaneh.haddadi@gmail.com
        </p>
        <p className="info">
          <FaMobileAlt className="footer-icon" fill="#82b0a9" size="17" /> +98
          912 467 63 71
        </p>
      </div>
    </footer>
  );
};

export default Footer;
