import React from 'react';
import HeroSlider from '../components/UI/HeroSlider';
import  Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from "reactstrap";
import FindCarForm from '../components/UI/FindCarForm';
import AboutSection from '../components/UI/AboutSection';
import ServicesList from '../components/UI/ServicesList';

const Home = () => {
  return (
    <Helmet title="Home">
      <section className='hero__slider-section'>
        <HeroSlider/>
        <div className="hero__form">
          <Container>
            <Row className="form__row">
              <Col lg="4" md="4">
                <div className="find__cars-left">
                  <h2>Find your best car here</h2>
                </div>
              </Col>

              <Col lg="8" md="8" sm="12">
                <FindCarForm />
              </Col>
            </Row>
          </Container>
        </div>
     </section>

     {/* About Section */}
     <AboutSection/>

     {/* services section */}

     <section>
     {/* <Container>
     <Row>
      <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">See our</h6>
              <h2 className="section__title">Popular Services</h2>
       </Col>
       <ServicesList/>       
     
     </Row>
     </Container> */}
     </section>

    </Helmet>
  );
};

export default Home;
