import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    title: "Electricity Predictor",
    category: "Machine Learning",
    tools: "Python, Pandas, Scikit-Learn, Streamlit",
    image: "/images/electricity-predictor.png",
    liveLink: "https://lnkd.in/gWkaarQ6",
    githubLink: "https://lnkd.in/gRG6K5SU",
    streamlitLink: "https://electricity-demand-predictor-rt.streamlit.app/"
  },
  {
    title: "Project Name",
    category: "Category",
    tools: "Javascript, TypeScript, React, Threejs",
    image: "/images/placeholder.webp",
    liveLink: "",
    githubLink: "",
    streamlitLink: ""
  }
];

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
                {project.githubLink && (
                  <div style={{ marginTop: '10px', display: 'flex', gap: '15px' }}>
                    <a href={project.githubLink} target="_blank" rel="noreferrer" style={{ color: '#adacac', textDecoration: 'underline', fontWeight: 400, fontSize: '15px' }}>GitHub Repo</a>
                    {project.streamlitLink && (
                      <a href={project.streamlitLink} target="_blank" rel="noreferrer" style={{ color: '#adacac', textDecoration: 'underline', fontWeight: 400, fontSize: '15px' }}>Streamlit App</a>
                    )}
                  </div>
                )}
              </div>
              <WorkImage image={project.image} alt="" link={project.liveLink || undefined} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
