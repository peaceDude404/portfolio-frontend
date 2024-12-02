import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';

interface ExperienceProps{
    experienceRef: React.RefObject<HTMLDivElement>;
}

const Experience = ({experienceRef} : ExperienceProps) => {
  
    const timelineData = [
        {
          title: "Associate Product Engineer 2 | CredAble",
          subtitle: "Noida, India",
          description: "Full Stack Developer worked on Event Driven Architecture , Jar modular Architecture and many other features. Tech Used Java , Springboot and Angular",
          date: "2023 - present",
          iconStyle: { background: "rgb(33, 150, 243)", color: "#fff" },
          icon: "",
          className: "vertical-timeline-element--work",
        },
        {
          title: "Freelance Developer | Rock Gym",
          subtitle: "Remote",
          description: "Created a gym management portal, Ensuring a smooth onboarding , maintainence and tracking of the Gym Members.",
          date: "2023-2023",
          iconStyle: { background: "rgb(33, 150, 243)", color: "#fff" },
          icon: "",
          className: "vertical-timeline-element--work",
        },
        {
            title: "Indian Institute of Information Technology, Lucknow",
            subtitle: "Lucknow, India",
            description: "Completed B.tech Degree, in Computer Science Major",
            date: "2019-2023",
            iconStyle: { background: "rgb(33, 150, 243)", color: "#fff" },
            icon: "",
            className: "vertical-timeline-element--work",
          },
      ];


  return (
    <>
    <div className="experience" ref={experienceRef}>
        <VerticalTimeline lineColor="rgb(255, 165, 0)">
          {timelineData.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              className={item.className}
              date={item.date}
              iconStyle={item.iconStyle}
              icon={item.icon}
            >
              <h3 className="vertical-timeline-element-title">{item.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{item.subtitle}</h4>
              <p>{item.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
    </div>

    </>
  )
}

export default Experience