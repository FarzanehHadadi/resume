import { FaEnvelope, FaMobileAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer">
      <h2>get in touch</h2>
      <div className="contact">
        <div className="info-container">
          <h3>call me</h3>
          <p className="info">
            <FaMobileAlt className="footer-icon" fill="#292216" size="17" /> +98
            912 467 63 71
          </p>
        </div>
        <div className="info-container">
          <h3>drop me a line</h3>
          <p className="info">
            <FaEnvelope className="footer-icon" fill="#292216" size="17" />{" "}
            farzaneh.haddadi@gmail.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
