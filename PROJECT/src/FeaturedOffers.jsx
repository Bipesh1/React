import React, { useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import AOS from 'aos';
import 'aos/dist/aos.css'
import Heading from "./Heading";

function FeaturedOffers(){
    useEffect(()=>{
        AOS.init({duration:2000})
    },[])
  return (
    <div style={{ marginTop: 100 }}>
      <div className="offers container text-center" data-aos="flip-right"> 
        <Heading text="FEATURED OFFERS"/>
        <p>
          We offer a complete range of hair services including haircuts &
          styling, coloring, eyebrow and eyelash tinting, perming, hair
          straightening, and a lot more.
        </p>
      </div>
      <div className="offer-items container" data-aos="flip-right">
        <div className="row">
          <div className="col-lg-4">
            <Card style={{ width: "22rem" }} className="border border-0 mx-auto">
            <div className="offer">
              <Card.Img variant="top" src="./images/offer1.jpg"/>
              <button className="btn btn-dark rounded-0" href="#">Book Now</button>
            </div>
              <Card.Body>
                <Card.Title className="text-center">HAIR CUTS</Card.Title>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4">
          <Card style={{ width: "22rem" }} className="border border-0 mx-auto">
            <div className="offer">
              <Card.Img variant="top" src="./images/offer2.jpg" />
              <button className="btn btn-dark rounded-0" href="#">Book Now</button>
            </div>
              <Card.Body>
                <Card.Title className="text-center">HAIR STYLES</Card.Title>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4">
          <Card style={{ width: "22rem" }} className="border border-0 mx-auto">
            <div className="offer">
              <Card.Img variant="top" src="./images/offer3.jpg" />
              <button className="btn btn-dark rounded-0" href="#">Book Now</button>
            </div>
              <Card.Body>
                <Card.Title className="text-center">COLORING</Card.Title>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedOffers;
