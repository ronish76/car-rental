
import React from 'react';
import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import '../../styles/header.css';

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/cars",
    display: "Cars",
  },

  {
    path: "/blogs",
    display: "Blog",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {
  return(
   <header className="header">

    {/*============header top=============*/}
    <div className="header__top">
      <container>
        <Row>
        <Col lg = '6' md='6' sm='6'>
          <div className="header__top__left">
            <span>Need Help ?</span>
            <span className="header__top__help">
            <i class="ri-phone-fill"></i> +1-000-45678
            </span>
          </div>
        </Col>

        <Col lg = '6' md='6' sm='6'>
          <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
            <Link to = '#' className='d-flex align-items-center gap-1'>
              
              <i class="ri-login-circle-line"></i>Login
              </Link>
            
            <Link to = '#' className='d-flex align-items-center gap-1'>
              
              <i class="ri-user-line"></i>Register
              </Link>
          </div>
        </Col>
        </Row>
      </container>
    </div>


    {/*============header middle=========*/}
         
      <div className="header__middle">
        <Container>
          <Row>
            <Col lg='3' md='2' sm='3'>
               <div className="Logo">
                  <h1>
                  <Link to='/home' className='d-flex align-items-center gap-1'>
                <i class="ri-car-line"></i>
                <span>Rent Car <br/> service</span>
                  </Link>
                  </h1>
                </div>  

            </Col>

            <Col lg='3' md='2' sm='3'>
               <div className="header__location">
                <span><i class="ri-earth-line"></i></span>
                
                <div className="header__location-content"></div>
              <h5>Nepal</h5>
              <h6>Kathmandu City</h6>
              </div>  
            </Col>

            <Col lg='3' md='2' sm='3'>
               <div className="header__location">
                <span><i class="ri-time-line"></i></span>
                
                <div className="header__location-content"></div>
              <h5>Sunday to Friday</h5>
              <h6>10 am to 7 pm</h6>
                </div>  
            </Col>

            <Col lg='3' md='2' sm='3'>
              <button className="header__btn btn d-flex align-items-center justify-content-end text-end">
                <Link to ='/contact'>
                <i class="ri-phone-line"></i>
                <span>Request a Call</span>
                </Link>
              </button>
            </Col>

          </Row>
        </Container>
      </div>

      
      {/*main navigation*/}


    <div className="main__navbar">
       <Container>
       <div className="navigation__wrapper d-flex align-items-center justify-content-between">
       <span className='mobile__menu'><i class="ri-menu-line"></i>
       </span>
       <div className="navigation">
        <div className="menu">
             {
              navLinks.map((item,index)=>(
                <NavLink to={item.path} key={index}>{item.display}</NavLink>
              )
              )
             }
        </div>
        </div> 
        <div className="nav__right">
          <div className="search__box">
            <input type='text' placeholder='Search'/>
            <span>
            <i class="ri-search-line"></i>
            </span>
          </div>
        </div>
       
       
       </div>
       
       </Container> 
    </div>

   </header>
  );
};

export default Header;
