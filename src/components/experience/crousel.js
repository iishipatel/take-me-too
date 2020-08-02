import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from 'react'
import Expecard from "./experience"
import "./exp.css"

import img2 from "../../assets/Ellipse 2.png"
import img3 from "../../assets/Ellipse 3.png"
import img4 from "../../assets/Ellipse 4.png"
import img5 from "../../assets/Ellipse 5.png"
import img6 from "../../assets/Ellipse 6.png"
import img7 from "../../assets/Ellipse 7.png"
import img8 from "../../assets/Ellipse 8.png"
import img1 from "../../assets/Ellipse 1.jpeg"





function Card(){
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
return(
    <div>
        <h1 className="h4uu">Book an Experience</h1>
        <div className="ml-5 mt-5">
            <h1 className="h4u animate__animated animate__bounceInRight">Lunar Experiences</h1>
    <Carousel
    swipeable={false}
    draggable={false}
    showDots={true}
    responsive={responsive}
    ssr={true} // means to render carousel on server-side.
    infinite={true}
    autoPlaySpeed={1000}
    keyBoardControl={true}
    customTransition="all .5"
    transitionDuration={500}
    containerClass="carousel-container"
    removeArrowOnDeviceType={["tablet", "mobile"]}
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px"
    >
            <div><Expecard title="Space Jump" pic={img4}/></div>
            <div><Expecard title="Moon Walk" pic={img2}/></div>
            <div><Expecard title="Moon Trek" pic={img3}/></div>
            <div><Expecard title="Lunar Rover" pic={img4}/></div>
            <div><Expecard title="Earth Gazing" pic={img5}/></div>

    </Carousel>
    </div>
<br></br>

<div className="ml-5 ml-2">
    <h1 className="h4u animate__animated animate__bounceInRight">ISS Experiences</h1>

<Carousel
    swipeable={false}
    draggable={false}
    showDots={true}
    responsive={responsive}
    ssr={true} // means to render carousel on server-side.
    infinite={true}
    autoPlaySpeed={1000}
    keyBoardControl={true}
    customTransition="all .5"
    transitionDuration={500}
    containerClass="carousel-container"
    removeArrowOnDeviceType={["tablet", "mobile"]}
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px"
    >
            <div><Expecard title="Space Walk" pic={img5}/></div>
            <div><Expecard title="Sunrise/Sunset Date at ISS" pic={img4}/></div>
            <div><Expecard title="Star Gazing" pic={img5}/></div>
            <div><Expecard title="Lazer Beam Fight" pic={img2}/></div>
            <div><Expecard title="Phtogoraphy Session" pic={img1}/></div>

    </Carousel>
    </div>
    </div>
    )
}

export default Card;