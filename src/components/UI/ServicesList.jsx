import React from 'react';
import { Col } from 'reactstrap';
import '../../styles/services-list.css';
import serviceData from '../../assets/data/serviceData'

const ServicesList = () => {
  return 
    
};

const ServiceItem =({item})=>(
    <Col lg ='4' md='4' sm='6' classNAme='mb-3'>
        <div className='service__item'>
            <span classname='mb-3'>
              <i class={item,icon} />  
            </span>

            <h6>{item,title}</h6>
            <p className='section__description'>{item,desc}</p>
        </div>
    </Col>
)

export default ServicesList;
