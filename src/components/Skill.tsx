import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ImageReact from "../assets/react-logo.svg";
import ImageJava from "../assets/java-logo.svg";
import ImageSpringBoot from "../assets/springboot-logo.svg";
import ImageNode from "../assets/nodejs-logo.svg";
interface SkillProps {
  skillRef: React.RefObject<HTMLDivElement>;
}

const skill = ({ skillRef }: SkillProps) => {
  const data = [
    {
      name: "Java",
      img: ImageJava,
    },
    {
      name: "SpringBoot",
      img: ImageSpringBoot,
    },
    {
      name: "React",
      img: ImageReact,
    },
    {
      name: "Node",
      img: ImageNode,
    },
  ];

  return (
    <div className="skill " ref={skillRef}>
      <Carousel className="carousel-skill" autoPlay={true} showThumbs={false} width="75%" interval={2000} infiniteLoop={true} showArrows={false} showIndicators={false} statusFormatter={() => {return ""}}>
        {data.map((item) => (
          <div>
            <img src={item.img} className="skill-image" />
            <p className="">{item.name}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default skill;
