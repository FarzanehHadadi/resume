import { Col, Container, Image, Row } from "react-bootstrap";
import bootstrap from "../asset/bootstrap.png";
import github from "../asset/github.png";
import git from "../asset/git.png";
import npm from "../asset/npm.png";
import redux from "../asset/redux.png";
import tfs from "../asset/tfs.png";
import visualstudio from "../asset/visual-studio.png";
import vscode from "../asset/vscode.png";
import webpack from "../asset/webpack.png";
import ProgressBar from "react-bootstrap/ProgressBar";
import "bootstrap/dist/css/bootstrap.min.css";

const Skills = () => {
  return (
    <Container>
      <h3 className="h2 text-uppercase font-italic text-primary">skills</h3>
      <Row className="py-2 my-3">
        <Col md={6} xs={10} className="mb-4 ">
          <Row>
            <Col xs={8} className="align-self-center">
              <ProgressBar striped variant="success" now={80} />
            </Col>
            <Col>
              <h5 className="skill-name">ReactJS</h5>
            </Col>
          </Row>
        </Col>
        <Col md={6} xs={10} className="mb-4 ">
          <Row>
            <Col xs={8} className="align-self-center">
              <ProgressBar striped variant="warning" now={70} />
            </Col>
            <Col>
              <h5 className="skill-name">Javascript</h5>
            </Col>
          </Row>
        </Col>
        <Col md={6} xs={10} className="mb-4 ">
          <Row>
            <Col xs={8} className="align-self-center">
              <ProgressBar striped variant="info" now={30} />
            </Col>
            <Col>
              <h5 className="skill-name">NextJS</h5>
            </Col>
          </Row>
        </Col>
        <Col md={6} xs={10} className="mb-4 ">
          <Row>
            <Col xs={8} className="align-self-center">
              <ProgressBar striped variant="danger" now={70} />
            </Col>
            <Col>
              <h5 className="skill-name">HTML5</h5>
            </Col>
          </Row>
        </Col>
        <Col md={6} xs={10} className="mb-4 ">
          <Row>
            <Col xs={8} className="align-self-center">
              <ProgressBar striped variant="primary" now={60} />
            </Col>
            <Col>
              <h5 className="skill-name">CSS/SASS</h5>
            </Col>
          </Row>
        </Col>
        <Col md={6} xs={10} className="mb-4 ">
          <Row>
            <Col xs={8} className="align-self-center">
              <ProgressBar striped variant="success" now={80} />
            </Col>
            <Col>
              <h5 className="skill-name">C#</h5>
            </Col>
          </Row>
        </Col>
        <Col md={6} xs={10} className="mb-4 ">
          <Row>
            <Col xs={8} className="align-self-center">
              <ProgressBar striped variant="warning" now={80} />
            </Col>
            <Col>
              <h5 className="skill-name">Visual C++</h5>
            </Col>
          </Row>
        </Col>
      </Row>
      <hr />
      <h2 className="h2 text-uppercase font-italic text-primary">dev tools</h2>
      <Row className="py-2 my-3">
        <Col className="text-center">
          <Image src={redux} alt="redux" />
          <p className="dev-name">redux</p>
        </Col>
        <Col className="text-center">
          <Image src={git} />
          <p className="dev-name">Git</p>
        </Col>
        <Col className="text-center">
          <Image src={github} alt="github" />
          <p className="dev-name">gitHub</p>
        </Col>
        <Col className="text-center">
          <Image src={bootstrap} alt="bootstrap" />
          <p className="dev-name">bootstrap</p>
        </Col>
        <Col className="text-center">
          <Image src={npm} alt="npm" />
          <p className="dev-name">NPM</p>
        </Col>
        <Col className="text-center">
          <Image src={webpack} alt="webpack" />
          <p className="dev-name">webpack</p>
        </Col>
        <Col className="text-center">
          <Image src={tfs} alt="tfs" />
          <p className="dev-name">TFS</p>
        </Col>
        <Col className="text-center">
          <Image src={visualstudio} alt="visualstudio" />
          <p className="dev-name">visual studio</p>
        </Col>
        <Col className="text-center">
          <Image src={vscode} alt="vscode" />
          <p className="dev-name">vs code</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;
