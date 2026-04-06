import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Member</h4>
                <h5>SOFTWARE DEVELOPMENT CLUB, REC-AMBEDKARNAGAR</h5>
              </div>
              <h3>2024-Present</h3>
            </div>
            <p>
              Engaged in peer learning sessions, improving algorithmic thinking and development practices. Gained hands-on experience in Programming languages (C++, HTML and Python) and Data Structure and Algorithms (DSA).
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Science Mentor</h4>
                <h5>KOSHISH WELFARE AND EDUCATIONAL SOCIETY</h5>
              </div>
              <h3>2024-Present</h3>
            </div>
            <p>
              As a mentor, I join novices in unit and lesson planning and in carrying out those plans in the classroom.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Python Intern</h4>
                <h5>YBI FOUNDATION</h5>
              </div>
              <h3>2024-2025</h3>
            </div>
            <p>
              Internship in Python (Programming Language).
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor Of Technology in IT</h4>
                <h5>DR.A.P.J.ABDUL KALAM TECHNICAL UNIVERSITY</h5>
              </div>
              <h3>2023-2027</h3>
            </div>
            <p>
              Currently pursuing a B.Tech in Information Technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
