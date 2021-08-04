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
    <Container className="px-4">
      <h3 className="h4 text-uppercase font-italic text-primary">skills</h3>
      <Row className="py-2 my-3">
        <Col md={6} xs={10} className="mb-4 ">
          <Row>
            <Col xs={6} className="align-self-center">
              <ProgressBar
                striped
                variant="info"
                now={80}
                style={{ height: "8px" }}
              />
            </Col>
            <Col>
              <h6 className="skill-name">ReactJS</h6>
            </Col>
          </Row>
        </Col>
        <Col md={6} xs={10} className="mb-4 ">
          <Row>
            <Col xs={6} className="align-self-center">
              <ProgressBar
                striped
                variant="info"
                now={70}
                style={{ height: "8px" }}
              />
            </Col>
            <Col>
              <h6 className="skill-name">Javascript</h6>
            </Col>
          </Row>
        </Col>
        <Col md={6} xs={10} className="mb-4 ">
          <Row>
            <Col xs={6} className="align-self-center">
              <ProgressBar
                striped
                variant="info"
                now={30}
                style={{ height: "8px" }}
              />
            </Col>
            <Col>
              <h6 className="skill-name">NextJS</h6>
            </Col>
          </Row>
        </Col>
        <Col md={6} xs={10} className="mb-4 ">
          <Row>
            <Col xs={6} className="align-self-center">
              <ProgressBar
                striped
                variant="info"
                style={{ height: "8px" }}
                now={70}
              />
            </Col>
            <Col>
              <h6 className="skill-name">HTML5</h6>
            </Col>
          </Row>
        </Col>
        <Col md={6} xs={10} className="mb-4 ">
          <Row>
            <Col xs={6} className="align-self-center">
              <ProgressBar
                striped
                variant="info"
                now={60}
                style={{ height: "8px" }}
              />
            </Col>
            <Col>
              <h6 className="skill-name">CSS/SASS</h6>
            </Col>
          </Row>
        </Col>
        <Col md={6} xs={10} className="mb-4 ">
          <Row>
            <Col xs={6} className="align-self-center">
              <ProgressBar
                striped
                variant="info"
                now={80}
                style={{ height: "8px" }}
              />
            </Col>
            <Col>
              <h6 className="skill-name">C#</h6>
            </Col>
          </Row>
        </Col>
        <Col md={6} xs={10} className="mb-4 ">
          <Row>
            <Col xs={6} className="align-self-center">
              <ProgressBar
                striped
                variant="info"
                now={80}
                style={{ height: "8px" }}
              />
            </Col>
            <Col>
              <h6 className="skill-name">Visual C++</h6>
            </Col>
          </Row>
        </Col>
      </Row>
      <hr />
      <h3 className="h4 text-uppercase font-italic text-primary">dev tools</h3>
      <Row className="py-2 my-3">
        <Col className="text-center">
          <Image src={redux} alt="redux" className="skill-img" />
          <p className="dev-name">redux</p>
        </Col>
        <Col className="text-center">
          <Image src={git} className="skill-img" />
          <p className="dev-name">Git</p>
        </Col>
        <Col className="text-center">
          <Image src={github} alt="github" className="skill-img" />
          <p className="dev-name">gitHub</p>
        </Col>
        <Col className="text-center">
          <Image src={bootstrap} alt="bootstrap" className="skill-img" />
          <p className="dev-name">bootstrap</p>
        </Col>
        <Col className="text-center">
          <Image src={npm} alt="npm" className="skill-img" />
          <p className="dev-name">NPM</p>
        </Col>
        <Col className="text-center">
          <Image src={webpack} alt="webpack" className="skill-img" />
          <p className="dev-name">webpack</p>
        </Col>
        <Col className="text-center">
          <Image src={tfs} alt="tfs" className="skill-img" />
          <p className="dev-name">TFS</p>
        </Col>
        <Col className="text-center">
          <Image src={visualstudio} alt="visualstudio" className="skill-img" />
          <p className="dev-name">visual studio</p>
        </Col>
        <Col className="text-center">
          <Image src={vscode} alt="vscode" className="skill-img" />
          <p className="dev-name">vs code</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;
