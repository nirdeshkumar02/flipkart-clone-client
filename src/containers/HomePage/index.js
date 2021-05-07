import React from "react";
import Layout from "../../components/Layout";
import { Carousel, Jumbotron, Container } from "react-bootstrap";

import image1 from "../../images/carouselImage/a.jpg";
import image2 from "../../images/carouselImage/b.jpg";
import image3 from "../../images/carouselImage/c.png";
import image4 from "../../images/carouselImage/1.jpg";
import image5 from "../../images/carouselImage/2.jpg";
import image6 from "../../images/carouselImage/3.jpg";
import image7 from "../../images/carouselImage/d.jpg";
import image8 from "../../images/carouselImage/e.jpg";
import image9 from "../../images/carouselImage/f.jfif";
import image10 from "../../images/carouselImage/g.jpg";
import image11 from "../../images/carouselImage/h.jpg";

/**
 * @author
 * @function HomePage
 **/

const HomePage = (props) => {
  return (
    <Layout>
      <br />
      {/* 1st carousel banner */}
      <div>
        <Carousel fade={true} style={{ zIndex: -1}} controls={false} >
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src={image1}
              height="500px"
              width="300px"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={6000}>
            <img
              className="d-block w-100"
              src={image2}
              height="500px"
              width="300px"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={9000}>
            <img
              className="d-block w-100"
              src={image3}
              height="500px"
              width="300px"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <br />
      {/* 2nd carousel banner */}
      <div>
        <Carousel fade={true} controls={false} style={{ zIndex: -1 }}>
          <Carousel.Item interval={4000}>
            <img
              className="d-block w-100"
              src={image4}
              height="250px"
              width="250px"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={7000}>
            <img
              className="d-block w-100"
              src={image5}
              height="250px"
              width="250px"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={10000}>
            <img
              className="d-block w-100"
              src={image6}
              height="250px"
              width="250px"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <br />
      {/* 3rd carousel banner */}
      <div>
        <Carousel fade={true} controls={false} style={{ zIndex: -1 }}>
          <Carousel.Item interval={5000}>
            <img
              className="d-block w-100"
              src={image7}
              height="500px"
              width="300px"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={8000}>
            <img
              className="d-block w-100"
              src={image9}
              height="500px"
              width="300px"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={11000}>
            <img
              className="d-block w-100"
              src={image11}
              height="500px"
              width="300px"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={14000}>
            <img
              className="d-block w-100"
              src={image10}
              height="500px"
              width="300px"
              alt="Fourth slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={17000}>
            <img
              className="d-block w-100"
              src={image8}
              height="500px"
              width="300px"
              alt="Fifth slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </Layout>
  );
};

export default HomePage;
