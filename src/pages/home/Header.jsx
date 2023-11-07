import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.css";
import img1 from "../../assets/img/home/healthy-heart.png";
import millets01 from "../../assets/img/homepage/millets-01.jpg";
import millets02 from "../../assets/img/homepage/millets-02.jpg";
import carouselimg01 from "../../assets/img/home/carousel/raagi-porridge-01.jpg";
import carouselimg02 from "../../assets/img/home/carousel/Porridge-02.jpg";
import carouselimg03 from "../../assets/img/home/carousel/Paanakam-03.jpg";
import carouselimg04 from "../../assets/img/home/carousel/oats-porridge-sweet-04.jpg";
import Carousel from "./Carousel";
import rcimg from "../../assets/img/home/rotate-circle.png";
import { Link } from "react-router-dom";

function Header() {
  const imageStyles = {
    maxWidth: "100%",
    // height: 'auto',
    height: "20rem",
  };

  return (
    <div className="container Headercontainer text-center my-5">
      <Carousel/>
      <div className="textStyle d-flex pt-5">
        <div className="p-5">
          <img src={img1} height='400' width='400'  />
        </div>
        <div  className="textStyle justify-item-center pt-5">
        <h2>Hello There!</h2>
        <p className="lead">
          I am Jaava Pot - I am here to nourish your breakfast & snacks with
          porridges and soups made of Millet.
        </p>
            <p>How do you know?</p>
            <p>
              Exactly like you thought, with our favorite grandma's grains and
              recipes.
            </p>
            <p>
              My philosophy about food is super simple - and it has two facets!
              Plants are the focus and everything should be consumed in
              moderation.
            </p>
            <p>
              It is possible to incorporate all foods into your diet if you
              approach food in a peaceful and non-judgmental manner. I promise
              there's a place for your candy bars and chips!
            </p>
            <p>Your Porridge & Soup</p>
            </div>
       
      </div>
      {/* <a href="#menu" className="btn btn-danger">
        Try Me & Taste Me!
      </a> */}
  <div className='rotationbg' style={{ position: 'relative' }}>
  <Link className="home-feature-panel-link" to="/offerings-main" style={{ position: 'absolute', top: '41.5%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 2 }}>
  <div className="home-feature-panel-link-content">
    <h4 className="h5">Make your choice</h4>
    <span className="cta-link">View All</span>
  </div>
</Link>
  <img src={rcimg} style={{ height: "35rem", width: "35rem", animation: 'rotate 20s linear infinite', position: 'relative', zIndex: 1 }} />
</div>
    </div>
  );
}

export default Header;
