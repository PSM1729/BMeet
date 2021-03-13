import React from 'react';
import './about.css';
import AddIcon from '@material-ui/icons/Add';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const About = () => {
  return (
    <div className="bg-white">
      <section id="team" className="pb-5">
        <div className="container">
          <div
            className="title-about section-title"
            style={{ fontFamily: "Ubuntu" }}
          >
            About Us
          </div>
          <div
            className="about-body mb-4"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "20px",
              textAlign: "center",
            }}
          >
            Bmeet is a video meeting platform that is created For holding free video conferences and meetings. 
			It can be used by anyone and it is completely free of cost without any restrictions.
          </div>
          <hr />
        </div>
        <div className="container">
          <h5 className="section-title h1" style={{ fontFamily: "Ubuntu" }}>
            Founders
          </h5>
          <div className="row justify-content-center">
            <div className="col-xs-12 col-sm-6 col-md-4 ">
              <div
                className="image-flip"
                ontouchstart="this.classNameList.toggle('hover');"
              >
                <div className="mainflip">
                  <div className="frontside">
                    <div className="card">
                      <div className="card-body text-center">
                        <p>
                          <img
                            className=" img-fluid"
                            src="https://drive.google.com/thumbnail?id=1QLMhfquVTX1APSzXrFQuG2MZK4BiDpBl"
                            alt="img"
                          />
                        </p>
                        <h4 className="card-title">Prachi Mishra </h4>
                        <p className="card-text">Co-Founder</p>
                        <a href="" className="btn btn-primary btn-sm" >
                          <AddIcon />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="backside">
                    <div className="card">
                      <div className="card-body text-center mt-4">
                        <h4 className="card-title">Prachi Mishra</h4>
                        <p className="card-text">
                          Easy and hard are a state of mind.
                        </p>
                        <ul className="list-inline">

                          <li className="list-inline-item">
                            <a
                              className="social-icon text-xs-center"
                              href="https://www.linkedin.com/in/prachhi-sabita-mishra-039916191"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <LinkedInIcon />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              className="social-icon text-xs-center"
                              href="https://github.com/PSM1729"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <GitHubIcon />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-4">
              <div
                className="image-flip"
                ontouchstart="this.classNameList.toggle('hover');"
              >
                <div className="mainflip">
                  <div className="frontside">
                    <div className="card">
                      <div className="card-body text-center">
                        <p>
                          <img
                            className=" img-fluid"
                            src="https://avatars.githubusercontent.com/u/54063851?s=400&u=a6aa3b9e97fc14b81608dcae499ae16db23421af&v=4"
                            alt="img"
                          />
                        </p>
                        <h4 className="card-title">Tarun Reddy</h4>
                        <p className="card-text">Co-Founder</p>
                        <a href="/home" className="btn btn-primary btn-sm">
                          <AddIcon />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="backside">
                    <div className="card ">
                      <div className="card-body text-center mt-4">
                        <h4 className="card-title">Tarun Reddy</h4>
                        <p className="card-text">
                          <br />
                          Nothing good or bad beyond OUR mind
                        </p>
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <a
                              className="social-icon text-xs-center"
                              href="https://www.linkedin.com/in/mallidi-tarun-reddy-5b3079193/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <LinkedInIcon />
                            </a>
                          </li>

                          <li className="list-inline-item">
                            <a
                              className="social-icon text-xs-center"
                              href="https://github.com/darkcheftar"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <GitHubIcon />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
			
			<div className="col-xs-12 col-sm-6 col-md-4">
              <div
                className="image-flip"
                ontouchstart="this.classNameList.toggle('hover');"
              >
                <div className="mainflip">
                  <div className="frontside">
                    <div className="card">
                      <div className="card-body text-center">
                        <p>
                          <img
                            className=" img-fluid"
                            src="https://drive.google.com/thumbnail?id=1QMiBKnu055GU7pWg5AfuaDZ9i4lR81LF"
                            alt="img"
                          />
                        </p>
                        <h4 className="card-title">Aryan</h4>
                        <p className="card-text">Co-Founder</p>
                        <a href="/home" className="btn btn-primary btn-sm">
                          <AddIcon />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="backside">
                    <div className="card ">
                      <div className="card-body text-center mt-4">
                        <h4 className="card-title">Aryan</h4>
                        <p className="card-text">
                          <br />
                          Be kind it's cooler than being cool.
                        </p>
                        <ul className="list-inline">
                            <li className="list-inline-item">
                            <a
                              className="social-icon text-xs-center"
                              href="https://www.linkedin.com/in/aryan-baloda-a6001b193"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <LinkedInIcon />
                            </a>
                          </li>

                          <li className="list-inline-item">
                            <a
                              className="social-icon text-xs-center"
                              href="#"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <GitHubIcon />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>
        <hr />
      </section>
    </div>
  );
};

export default About;