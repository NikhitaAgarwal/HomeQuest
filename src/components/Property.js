import React from "react";
import "./Property.css";
import p1 from "../images/p1.jpeg";
import p2 from "../images/p2.jpg";
import p3 from "../images/p3.jpeg";
import p4 from "../images/p4.avif";
import p5 from "../images/p5.jpg";
import p6 from "../images/p6.jpeg";
import p7 from "../images/p7.jpeg";

const Property = () => {
  const properties = [
    {
      id: 1,
      title: "Modern Apartment in Downtown",
      img: p1,
      price: "$500,000",
      short_description: "Spacious apartment with city views",
    },
    {
      id: 2,
      title: "Cozy Suburban Home",
      img: p2,
      price: "$350,000",
      short_description: "Family-friendly neighborhood with garden",
    },
    {
      id: 3,
      title: "Luxury Villa with Pool",
      img: p5,
      price: "$1,200,000",
      short_description: "Elegant villa with panoramic ocean views",
    },
    {
      id: 4,
      title: "Urban Loft in Trendy Area",
      img: p4,
      price: "$700,000",
      short_description: "Open-layout loft with industrial charm",
    },
    {
      id: 5,
      title: "Rural Retreat",
      img: p3,
      price: "$450,000",
      short_description: "Secluded farmhouse with acres of land",
    },
    {
      id: 6,
      title: "Lakefront Cottage",
      img: p6,
      price: "$300,000",
      short_description: "Quaint cottage with private lake access",
    },
    {
      id: 7,
      title: "Mountain Chalet",
      img: p7,
      price: "$800,000",
      short_description: "Ski-in, ski-out chalet in prime location",
    },
  ];

  return (
    <div className="container">
      <h1
        style={{
          paddingTop: 0,
          paddingBottom: 10,
          fontSize: 60,
          color: "rgb(209, 66, 66)",
        }}
      >
        PROPERTY
      </h1>
      <div className="row ">
        {properties.map((property) => (
          <div key={property.id} className="col-lg-4 col-md-6 col-sm-12 mb-3">
            <div className="card h-100" style={{ margin: "0 auto" }}>
              <img
                className="card-img-top property-img"
                src={property.img}
                alt={property.title}
                style={{ height: 250, objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{property.title}</h5>
                <h6 className="card-price" style={{ color: "black" }}>
                  {property.price}
                </h6>
                <p className="card-text">{property.short_description}</p>
                <a href="/" className="btn btn-primary">
                  View
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Property;
