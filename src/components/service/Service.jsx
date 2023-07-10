import React from 'react'
import './service.css';

const Service = ({title, description}) => {
  return (
    <div className="service">
        <p className='service-title'>{title}</p>
        <p className='service-description'>{description}</p>
    </div>
  )
}

export default Service