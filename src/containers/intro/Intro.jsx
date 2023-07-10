import React from 'react';
import image from '../../assets/Image.jpg';
import './intro.css';

const Intro = () => {
  return (
    <div className="intro section__padding" id="home">
        <div className="intro-content">
            <div className="bar"></div>
            <h1>Lloyd Semblante</h1>
            <p className='intro-title'>Professional Submarine Mechanic</p>
            <p className='intro-description'>"akoy tahimik lang sa umpisa kahit dimoko pilitin, bigyan moko tikila akoy sasama sayo sa submarine"</p>
            <div>
                <button type="button">Hire Me</button>
                <button type="button">Fuck Me</button>
            </div>
        </div>
        <div className="intro-image">
            <img src={image} alt="i" />
        </div>
    </div>
  )
}

export default Intro