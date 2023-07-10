import React from 'react'
import './services.css'

import { Service } from '../../components';


const Services = () => {
  return (
    <div className="services section__padding" id='services'>
        <h1>Services</h1>
        <div className="services-content">
            <div className="services-content_container">
                <Service title="Web Development" description="Creating / Designing Websites" />
                <Service title="Photo Editing" description="Manipulating images using Photoshop" />
            </div>
            <div className="services-content_container">
                <Service title="Software Development" description="Developing/Designing Fullstack softwares" />
                <Service title="Hacking" description="Hacking social media accounts" />
            </div>
        </div>
    </div>
  )
}

export default Services