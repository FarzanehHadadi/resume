import React from "react";
import { useState, useEffect, useRef } from "react";
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

export default function CustomizedTimeline() {
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
          date="2020 - present"
          iconStyle={{
            background: "#179c74",
            color: "#525050",
            fontSize: "2rem",
          }}
          icon={<FaReact size={70} />}
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="June 2014"
          iconStyle={{ background: "#179c74", color: "#fff" }}
          icon={<SiCsharp size={70} />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            {`Mapna Electric & Control Engineering & Manufacturing(MECO)`}
          </h4>
          <p className="location">Company in Karaj, Iran</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="December 2012"
          iconStyle={{ background: "#179c74", color: "#fff" }}
          icon={<CgCPlusPlus />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Developer{" "}
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Shabihbsazane Mantegh Company
          </h4>

          <p className="location">Company in Karaj, Iran</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2010-2014"
          iconStyle={{ background: "#7BCDBA", color: "#fff" }}
          icon={<IoSchoolSharp />}
        >
          <h3 className="vertical-timeline-element-title">Bachelor’s degree</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Information Technology
          </h4>
          <p>Shahroud University of Technology</p>
          <p className="location">Public university in Shahrud, Iran</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "#e3cd09", color: "#fff" }}
          icon={<AiFillStar />}
        />
      </VerticalTimeline>
    </section>
  );
}
