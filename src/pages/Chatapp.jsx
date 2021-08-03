import Navbar from "../component/Navbar";
import chatapp from "../asset/chatapp.jpg";
const ChatWithMe = () => {
  return (
    <div>
      <Navbar />
      <article className="single-project">
        <div className="single-project-title">
          <h3>chat with me</h3>
          <h5>chat application</h5>
        </div>
        <div className="single-project-image-container">
          <div className="circle"></div>
          <img src={chatapp} alt="tea shop" className="single-project-image" />
        </div>
        <div className="single-project-info">
          <p className="url">
            Project URL:&nbsp;
            <a
              href="https://hadadi-chatwithme.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              hadadi-chatwithme.netlify.app
            </a>
          </p>
          <p className="single-project-desc">
            it is a full-fledged firebase application with social authentication
            including google and github using firebase.great design and
            functionality. image support sound notification and the ability to
            create multiple rooms using react chat engine.
          </p>
        </div>
      </article>
    </div>
  );
};

export default ChatWithMe;
