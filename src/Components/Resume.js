import React from "react";

const Resume = ({ data }) => {
  const getRandomColor = () => {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  if (!data) return null;

  const education = data?.education?.map((education) => (
    <div key={education.school}>
      <h3>{education.school}</h3>
      <p className="info">
        {education.degree} <span>&bull;</span>
        <em className="date">{education.graduated}</em>
      </p>
      <p>{education.description}</p>
    </div>
  ));

  const work = data.work?.map((work) => (
    <div key={work.company}>
      <h3>{work.company}</h3>
      <p className="info">
        {work.title}
        <span>&bull;</span> <em className="date">{work.years}</em>
      </p>
      <p>{work.description}</p>
    </div>
  ));

  const certification = () => {
    return (
      <div>
        <h4>AWS Certified Developer - Associate</h4>
        <div className="download">
          <p>
            <a
              className="button certif"
              href="https://www.credly.com/badges/99dc5135-896a-4035-babb-194cf641b49a/linked_in?t=rvwi8s"
            >
              <i
                className="fa-brands fa-aws"
                style={{ marginRight: "15px", fontSize: "20px" }}
              ></i>
              View Certificate
            </a>
          </p>
        </div>
      </div>
    );
  };
  const skills = data.skills?.map((skills) => {
    const backgroundColor = getRandomColor();
    const className = "bar-expand " + skills.name.toLowerCase();
    const width = skills.level;

    return (
      <li key={skills.name}>
        <span style={{ width, backgroundColor }} className={className}></span>
        <em>{skills.name}</em>
      </li>
    );
  });

  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">{education}</div>
          </div>
        </div>
      </div>

      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>
        <div className="nine columns main-col">{work}</div>
      </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>
        <div className="nine columns main-col">
          {certification()}
          <h4 style={{marginBottom: "40px"}}>Technologies</h4>
          <div className="bars">
            <ul className="skills">{skills}</ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
