import React from "react";

const About = (props) => {
  if (!props.data) return null;

  const name = props.data.name;
  const profilepic = "images/" + props.data.image;
  const bio = props.data.bio;
  const email = props.data.email;
  const resumeDownload = props.data.resumedownload;

  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img
            className="profile-pic"
            src={profilepic}
            alt="Jasmeen Sran Profile Pic"
          />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>

          <p>{bio}</p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>{name}</span>
                <br />
                <span>{email}</span>
              </p>
            </div>
            <div className="columns download">
              <p>
                <a
                  className="button"
                  href="/resume.pdf"
                  download="jasmeen-sran-resume.pdf"
                >
                  <i className="fa fa-download"></i>Download Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
