import React, { useEffect, useState } from "react";
import about from "../images/about.jpg";
import "./About.css";
import member1 from "../images/member1.webp";
import member2 from "../images/member2.jpeg";
import member3 from "../images/member3.jpg";
import member4 from "../images/member4.webp";
import member5 from "../images/member5.jpeg";
import member6 from "../images/member6.jpg";
const About = () => {
  const [slideIn, setSlideIn] = useState(false);

  const team = [
    {
      id: 1,
      name: "Ross",
      img: member2,
      position: "CEO",
      desc: "Experienced leader with a strategic vision.",
    },
    {
      id: 2,
      name: "Rachel",
      img: member6,
      position: "Manager",
      desc: "Organizational expert with a focus on team growth.",
    },
    {
      id: 3,
      name: "Monica",
      img: member4,
      position: "Founder",
      desc: "Innovative entrepreneur passionate about real estate.",
    },
    {
      id: 4,
      name: "Chandler",
      img: member1,
      position: "Co-Founder",
      desc: "Creative thinker driving business development.",
    },
    {
      id: 5,
      name: "Joey",
      img: member3,
      position: "Employee",
      desc: "Hardworking team member dedicated to client satisfaction.",
    },
    {
      id: 6,
      name: "Phoebe",
      img: member5,
      position: "Software Developer",
      desc: "Tech-savvy professional enhancing digital solutions.",
    },
  ];

  useEffect(() => {
    // Set slideIn to true after component mounts
    setSlideIn(true);
  }, []);
  return (
    <div id="about">
      <div className={`container${slideIn ? " slide-in" : ""}`}>
        <div className="row align-items-center">
          <div className="col-md-6">
            <img src={about} alt="About Us" className="w-100 m-1 p-2" />
          </div>
          <div className="col-md-6 p-4">
            <div className="info">
              <h1 className="title">About Us</h1>
              <p className="lead m-1 p-2">
                Welcome to HomeQuest, my premier real estate agency, where our
                mission is to provide exceptional service and expertise to help
                our clients achieve their real estate goals. With years of
                experience in the industry, our team of dedicated professionals
                has built a reputation for excellence and integrity.
                <br />
                We are committed to staying up-to-date with the latest trends
                and technologies in the real estate market, and we use our
                knowledge and expertise to guide our clients through the buying
                and selling process with confidence.
              </p>
            </div>
          </div>
        </div>
        <div className="mission jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="title display-4">Mission</h1>
            <p className="lead m-1 p-2">
              At HomeQuest, our mission is to redefine real estate services
              through a commitment to integrity, transparency, and personalized
              client care. With a deep understanding of the local market and
              years of industry expertise, we strive to deliver exceptional
              results for every client. Our dedicated team of professionals
              works tirelessly to provide comprehensive guidance and support
              throughout the buying, selling, or renting process, ensuring that
              each transaction is smooth and successful.
              <br />
              We prioritize building long-term relationships based on trust and
              mutual respect, believing that our clients' satisfaction is the
              true measure of our success. By staying ahead of market trends and
              embracing innovative technologies, we aim to exceed expectations
              and set new standards in the real estate industry. Whether you're
              a first-time buyer or seasoned investor, HomeQuest is here to make
              your real estate journey a rewarding and stress-free experience.
            </p>
          </div>
        </div>
        <div className="row align-items-center">
          <h1 className="team text-center mb-4">Team Members</h1>
          <div className="row align-items-start">
            {team.map((member) => (
              <div key={member.id} className="col-md-3 mb-4">
                <div className="card" style={{ width: "100%" }}>
                  {/* Assuming member.img will be provided later */}
                  <img
                    className="card-img-top"
                    src={member.img}
                    alt={member.name}
                    style={{ height: "250px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{member.name}</h5>
                    <p className="card-text">{member.position}</p>
                    <p className="card-text">{member.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
