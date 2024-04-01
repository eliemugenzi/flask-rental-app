import React from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";

import driveImg from "../assets/all-images/drive.jpg";
import OurMembers from "../components/UI/OurMembers";
import "../styles/about.css";

const About = () => {
  return (
    <Helmet title="About">
      <CommonSection title="About Us" />
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={driveImg} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                  We Are Committed To Provide Safe Ride Solutions
                </h2>

                <p className="section__description">
                Renting a carwi us  is quick and easy, with many rental agencies offering online reservations 
                and flexible pickup locations. Plus, with additional amenities like GPS navigation, 
                roadside assistance, and insurance coverage, renting a car ensures a smooth and
                stress-free journey from start to finish. Experience the convenience and comfort of 
                renting a car for your next adventure or daily commute.


                </p>

                <p className="section__description">
               You can be emblaced on a weekend getaway, navigating a new city, or
                simply need a reliable mode of transportation, renting a car offers a hassle-free
                solution. With a diverse fleet of vehicles ranging from compact cars to spacious 
                SUVs and eco-friendly hybrids, there's a perfect option for every need and preference

                </p>

                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i class="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">If you need help </h6>
                    <h4>+250788282329</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>


      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h2 className="section__title">Our Members</h2>
            </Col>
            <OurMembers />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;
