import Timeline from "../component/Timeline";
import Navbar from "../component/Navbar";

import Summery from "../component/Summery";
import Skills from "../component/Skills";
import DownloadCV from "../component/DownloadCV";

const About = () => {
  return (
    <div className="about">
      <Navbar />
      <Summery />
      <hr />
      <Timeline />
      <hr />
      <Skills />
      <hr />
      <DownloadCV />
    </div>
  );
};

export default About;
