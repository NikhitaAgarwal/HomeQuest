import React from "react";
// import Navbar from "./Navbar";
import img1 from "../images/img1.jpeg";
import img2 from "../images/header.jpg";
import Contact from "./Contact";
import About from "./About";
import Property from "./Property";

const Home = () => {
  return (
    <div className="container-fluid w-100">
      <div className="row">
        <div className="col-md-12">
          <div
            id="carouselExampleSlidesOnly"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active" interval={10}>
                <img
                  className="d-block w-100"
                  src={img1}
                  alt="First slide"
                  style={{ height: 600 }}
                />
                <div className="carousel-caption">
                  <h3>Modern Urban Living</h3>
                  <p>
                    Discover the essence of modern urban living in our exclusive
                    properties.
                  </p>
                </div>
              </div>
              <div className="carousel-item" interval={10}>
                <img
                  className="d-block w-100"
                  src={img2}
                  alt="Second slide"
                  style={{ height: 600 }}
                />
                <div className="carousel-caption">
                  <h3>Luxury Retreats</h3>
                  <p>
                    Experience luxury retreats with breathtaking views and
                    unparalleled amenities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <About style={{ margintop: 0 }} />
      <Property style={{ margintop: 0 }} />
      <Contact style={{ margintop: 0 }} />
    </div>
  );
};

export default Home;
