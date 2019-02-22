import React, { Component } from 'react';
import '../assets/css/animate.min.css';
import '../assets/css/style.css';
import '../assets/css/font-awesome.min.css';
import '../assets/bootstrap/css/bootstrap.css';
import Slide1 from '../assets/images/impulse5.jpg';

class About extends Component {
  render() {
    return (
      <div>
            <div className="row container-kamn">
            <img src={Slide1} className="blog-post" alt="Feature-img" style={{width:"100%",height:'400px'}}/> 
    </div>

    <div id="banners"></div>
    <div className="container">   
        <div className="row">
            <div className="side-left col-sm-4 col-md-4" style={{height:"800px"}}>

                <h3 className="lead">About ICFAI Tech</h3><hr></hr>

                <p>Faculty of Science and Technology (FST), commonly known as ICFAI Tech is a constituent of IFHE. IFHE is a Deemed University established under Section 3 of UGC Act, 1956. ICFAI Tech provides quality education and training in the fields of science and technology.</p>
                <br></br>
                <h4>VISION AND MISSION OF OUR UNIVERSITY</h4><hr></hr>
                To be a top ranking University of choice for students, staff and corporates, recognized for excellence in Higher Education and Research especially relevant to social needs.<br />
                <br />
                The mission of the University is to offer world class, innovative, career-oriented professional post graduate and undergraduate programs through inclusive technology - aided pedagogies to equip students with the requisite professional and life skills as well as social sensitivity and high sense of ethics. The University will strive to create an intellectually stimulating environment for Research, particularly in areas bearing on the socio- economic and cultural development of the state and the nation.
            </div>
            <div className="col-sm-8 col-md-8">
                
                <h3 className="lead"id="anchor3">Director's Desk</h3>
                <blockquote>
                    <em>The ICFAI Foundation for Higher Education (IFHE) has evolved into a leading University offering a global approach to education and research centered curriculum with unique perspectives. ICFAI Tech (Faculty of Science & Technology) a constitunent of IFHE, aims to nurture graduates who are critical thinkers, creative and have a holistic education experience. Students are given the flexibility to chart their own academic courses from a wide range of electives offered to them. </em>
                </blockquote>
                
            </div>  
        </div>    
    </div> 
      </div>
    )
  }
}


export default About;