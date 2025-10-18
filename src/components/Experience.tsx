import React from "react";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "../data";

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
								zIndex: 99999,
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
