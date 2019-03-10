import React, { Component } from 'react';
import '../assets/css/animate.min.css';
import '../assets/css/style.css';
import '../assets/css/font-awesome.min.css';
import '../assets/bootstrap/css/bootstrap.css';
import Slide1 from '../assets/images/dlanor-s-703975-unsplash.jpg';
import Slide2 from '../assets/img/team/member2.png';
import Slide3 from '../assets/img/team/member3.png';

class Team extends Component {
  render() {
    return (
      <div>
          <div className="row container-kamn">  
        <img src={Slide1} style={{width:'100%',align:"right",height:'400px'}}  className="blog-post" aria-hidden alt="Feature-img"/> 
    </div>

  

    <div id="banners"></div>
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <div className="blockquote-box blockquote-info animated wow fadeInLeft clearfix">
                    <div className="square pull-left">
                        <img src={Slide2} alt="Feature-img" height="80" width="100"/>
                    </div>
                    <h4  style={{color:'white'}}>
                       Hitoishi Das
                    </h4>
                    <p>
                    <b  style={{color:'white'}}>16STUHH0048</b><br />
                    <b  style={{color:'white'}}>hitoishi.das@gmail.com</b>
                    </p>
                </div>
              
            </div>
            <div className="col-md-6">
                <div className="blockquote-box blockquote-danger animated wow fadeInRight clearfix">
                    <div className="square pull-left">
                        <img src={Slide3} alt="Feature-img" height="80" width="100"/>
                    </div>
                    <h4  style={{color:'white'}}>
                    Mridul Parakh
                    </h4>
                    <p>
                    <b  style={{color:'white'}}>16STUHH0184</b><br />
                    <b  style={{color:'white'}}>mridulparakh41@gmail.com</b>
                    </p>
                </div>
           
            </div>
        </div>
    </div>
      </div>
    )
  }
}

export default Team;
