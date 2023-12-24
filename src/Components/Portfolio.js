import React from "react";
import Zmage from "react-zmage";

const Portfolio = ({ data }) => {
  if (!data) return null;

  const projects = data.projects.map((project, index) => {
    let projectImage = "images/portfolio/" + project.image;

    return (
      <div key={index} className="columns portfolio-item" onClick={() =>{window.open(project.url, "_blank");}}>
        <div className="item-wrap">
          <img alt={project.title} src={projectImage} />
          <div style={{ textAlign: "center" }}>{project.title}</div>
        </div>
      </div>
    );
  });

  return (
    <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Projects.</h1>
            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {projects}
            </div>
          </div>
        </div>
    </section>
  );
};

export default Portfolio;
