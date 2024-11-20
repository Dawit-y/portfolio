import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const experiencesData = [
  {
    title: "Full Stack Developer | Intern",
    location: "Anku ICT Consulting PLC",
    description:
      "Developed a web application using Node.js and React during my internship,gaining hands-on experience in full-stack development also played a key role in the development of a large-scale web application using Django,DRF and React.",
    icon: <CgWorkAlt />,
    date: "June - Sep 2022",
  },
  {
    title: "Full Stack Developer | Intern",
    location: "Addis Way Technologies",
    description:
      "Played a pivotal role in the development of a large-scale web application using Laravel and React simultaneously engaged in learning and practicing data science, broadening skillsand knowledge to contribute to the interdisciplinary aspects of softwaredevelopment.",
    icon: <CgWorkAlt />,
    date: "June - Sep 2023",
  },
  {
    title: "Full-Stack Developer | Freelaner",
    location: "AfriWork, Upwork...",
    description:
      "I'm now a full-stack developer working as a freelancer. I'm open to full-time opportunities.",
    icon: <CgWorkAlt />,
    date: "Dec 2023 - present",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <h1 className="heading mb-10">
        My
        <span className="text-purple"> Experiences</span>
      </h1>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background: "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
