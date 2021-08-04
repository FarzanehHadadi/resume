import React from "react";
import { FaReact } from "react-icons/fa";
import { SiCsharp } from "react-icons/si";
import { CgCPlusPlus } from "react-icons/cg";
import { IoSchoolSharp } from "react-icons/io5";
import { AiFillStar } from "react-icons/ai";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Timeline() {
  return (
    <section className="section-center">
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#E0FBFC",
            color: "#fff",
          }}
          contentArrowStyle={{ borderRight: "7px solid  #E0FBFC" }}
          date="2019 - present"
          iconStyle={{
            background: "#179c74",
            color: "#525050",
            fontSize: "2rem",
          }}
          icon={<FaReact size={70} />}
        >
          <h5 className="vertical-timeline-element-title text-capitalize">
            freelance front end web developer
          </h5>
          <h5 className="vertical-timeline-element-subtitle location">
            Karaj, Iran
          </h5>
          <p>Professional Web Developer and Designer</p>
          <h6 className="text-primary mt-2"> Technical Stacks:</h6>
          <p style={{ fontSize: "0.9rem" }} className="pl-3">
            React,Redux, Javascript, jQuery, CSS, SASS, HTML5, etc
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="June 2014"
          iconStyle={{ background: "#72DDF7", color: "#fff" }}
          icon={<SiCsharp size={70} />}
        >
          <h4 className="vertical-timeline-element-title">
            Software Developer
          </h4>
          <h6 className="vertical-timeline-element-subtitle">
            {`Mapna Electric & Control Engineering & Manufacturing(MECO)`}
          </h6>
          <p className="location"> Karaj, Iran</p>
          <h5 className="text-primary">Responsibilities:</h5>
          <ul>
            <li>
              Applied clean code practices,refactoring legacy code and design
              patterns to develop readable, maintainable and scalable code
            </li>
            <li>
              Troubleshoot and resolve software bugs, and system configuration
            </li>
            <li>
              Experience in the application of agile methods, Scrum and Kanban
            </li>
            <li>
              Actively participated in discuss projects,code reviews, demos,
              design sessions, brainstorm ideas, and project retrospectives
            </li>
            <li>
              Supervising and overseeing the technical aspects of projects
            </li>
            <li>
              Researching and designing new software applications according to
              market needs
            </li>
            <li>
              Breaking down functional specifications into technical designs,
              development tasks, estimates, and executing to completion
            </li>
            <li>Mentor and train technical and non-technical team members.</li>
            <li>
              Recommending new technologies that can help grow productivity
            </li>
            {/* issues.Improving system quality and performance by identifying
            issues and problems */}
            {/* <li>
              Analyzing system requirements and delegating development tasks.
            </li> */}
            {/* <li> Improving the performance of existing software.</li> */}
            {/* <li>
              Writing scalable code for producing microservice applications.
            </li> */}
          </ul>

          <h5 className="text-primary">Achievements</h5>
          <ul>
            <li>
              Enhanced system scalability by implementing a logging mechanism.
            </li>
            <li>Decreased system errors by refactors some codes.</li>
            <li>
              Identified and resolved a process bottleneck that reduced system
              efficiency.
            </li>
            {/* <li>
              Mentoring and assisting with training of new and junior
              programmers as well as doing code reviews for them to ensure the
              highest possible quality in software products
            </li> */}
            <li>
              Experience with Visual Studio, WCF,Linq, Log4net,GoDiagram and
              syncfussion.
            </li>
            <li>Familiarity with Foundation Fieldbus, IEC 61131-3 standards</li>
            <li>
              Familiarity with PLC, DCS systems and QNX Momentics platform
            </li>
          </ul>
          <h5 className="text-primary"> Technical Stacks:</h5>
          <p style={{ fontSize: "0.9rem" }} className="pl-3">
            C#, C++, SQLServer,TFS,design patterns, TDD, agile and scrum
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="December 2012"
          iconStyle={{ background: "#8093F1", color: "#fff" }}
          icon={<CgCPlusPlus />}
        >
          <h4 className="vertical-timeline-element-title">
            Software Developer{" "}
          </h4>
          <h6 className="vertical-timeline-element-subtitle">
            Shabihbsazane Mantegh Company
          </h6>

          <p className="location"> Karaj, Iran</p>
          <p className="location">
            {/* i was working in an application it this company. i was writting code
            in visual C++,MySQL, sourceSafe , visual studio */}
          </p>
          <h5 className="text-primary">Responsibilities:</h5>
          <ul>
            {/* <li>Maintain and Add new Feature for the core system.</li> */}
            <li>
              Implement BI(Business intelligence) and Project Management module
              and design databases
            </li>
            <li>Maintain CRM(Customer Relationship Management) module</li>
            <li>
              Analyzing system requirements and delegating development tasks.
            </li>
            <li> Improving the performance of existing software.</li>
            <li>
              Writing scalable code for producing microservice applications.
            </li>
            <li>Maintain and design user interfaces for the Website.</li>
          </ul>
          <h5 className="text-primary">Achievements</h5>
          <ul>
            <li>
              Develop a module to enable users to predict sales amount in time
              intervals in windows-based BI application
            </li>
            <li>
              develop a graphical module to visualize sale and profit for users
            </li>
            <li>
              Experience with Visual Studio Macros, Visual Assist, HTML, etc.
            </li>
          </ul>

          <h5 className="text-primary"> Technical Stacks:</h5>
          <p>Visual C++, MySQL,SourceSafe</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2008-2012"
          iconStyle={{ background: "#B388EB", color: "#fff" }}
          icon={<IoSchoolSharp />}
        >
          <h4 className="vertical-timeline-element-title">Bachelor’s degree</h4>
          <h5 className="vertical-timeline-element-subtitle">
            Information Technology Engineering
          </h5>
          <p>Shahroud University of Technology</p>
          <p className="location">Public University in Shahrud, Iran</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "#FF3366", color: "#fff" }}
          icon={<AiFillStar />}
        />
      </VerticalTimeline>
    </section>
  );
}
