import React, { Component } from 'react';
import '../assets/css/animate.min.css';
import '../assets/css/style.css';
import '../assets/css/font-awesome.min.css';
import '../assets/bootstrap/css/bootstrap.css';
import Slide1 from '../assets/images/triti2.mp4';
import three from '../assets/images/threeory.jpg';
import mcsher from '../assets/images/mcsher.jpg';
import zaeden from '../assets/images/zaeden.jpg';

class About extends Component {
  render() {
    return (
      <div>
            <div className="row container-kamn">
            <video style={{height:'100%',width:'100%'}} loop autoPlay>
                <source src={Slide1} type="video/mp4"/>
            </video>
    </div>
    <section id="services" className="services-section section-global-wrapper">

     
            <div className="car row services-row services-row-head services-row-1">
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div className="services-group wow animated zoomIn" data-wow-offset="40" >
                    <img src={three} alt="MC SHER" style={{display:'cover',height:'100%',width:'100%'}}/>
                    </div>
                </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div className="services-group wow animated zoomIn" data-wow-offset="40" >
                    <img src={mcsher} alt="MC SHER" style={{display:'cover',height:'100%',width:'100%'}}/>
                    </div>
                </div>
         
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div className="services-group wow animated zoomIn" data-wow-offset="40" >
                    <img src={zaeden} alt="MC SHER" style={{display:'cover',height:'100%',width:'100%'}}/>
                    </div>
                </div>
                </div>
    </section>
    
    </div> 
    )
  }
}


export default About;