import React, { Component } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

class Banner extends Component {
  render() {
    const images = [
      {
        url: "./cadnewbg.jpeg",
        caption1: "Unparalleled comfort and convenience",
        caption2: "Explore our short-let apartments",
        caption3:
          "Book your stay today and unlock the door of comfort, flexibility, and personalized hospitality",
        action: { title: "Book Now", url: "contact" },
      },
      {
        url: "./cadfood4.jpeg",
        caption1: "More than just a restaurant and bar",
        caption2: "Ready for a delicious mealz",
        caption3: " Discover the finest cuisine in town, waiting just for you!",
        action: { title: "Order Now", url: "contact" },
      },
      {
        url: "./cadfood5.jpeg",
        caption1: "Invest",
        caption2: "Join the Cadence Family",
        caption3:
          "Investing in Cadence means joining a thriving business and becoming part of the Cadence family",
        action: { title: "Invest With Us", url: "invest" },
      },
      {
        url: "./cadfood7.jpeg",
        caption1: "",
        caption2: "A Journey of Excellence",
        caption3:
          "A testament to a journey fueled by passion, creativity, and a deep love for providing unforgettable experiences.",
        action: { title: "Join Us", url: "invest" },
      },
    ];
    return (
      <Slide autoplay={true} arrows={false} indicators={true} infinite={true}>
        {images.map((slideImage, index) => (
          <div className="each-slide" key={index}>
            <div style={{ backgroundImage: `url(${slideImage.url})` }}>
              <div className="each-slide-child">
                <div className="Slidetop">{slideImage.caption1}</div>
                <div className="Slidetitle">{slideImage.caption2}</div>
                <div className="Slidedetails">{slideImage.caption3}</div>
                <a href={slideImage.action.url}>
                  <button className="btn btn-warning   py-2  d-flex">
                    {slideImage.action.title}
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slide>
    );
  }
}

export default Banner;
