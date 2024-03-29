import React, { Component } from 'react';
// import Image1 from '../assets/img/slider/slide2.jpg';
import './e.scss';
import Slide1 from '../assets/img/slider/slide1.jpg';
import QR from '../assets/images/frame.png';


 class Events extends Component {
   componentDidMount(){
     console.log(this.props.location.state.im);
     document.body.scrollTop = document.documentElement.scrollTop = 0;
   }
  render() {
    return (
        <div> 
              <div className="row container-kamn">
              <div className="image">
              <img src={Slide1} style={{position:'relative'}} className="blog-post" alt="Feature-img" align="right" width="100%"></img>
              </div>
    </div>
        <div className="blog-card">
        <div className="meta" style={{overflow:'auto'}}>
        {this.props.location.state.im.length === 0 ?<div className="photo" style={{backgroundImage:"url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-2.jpg)"}}></div> :     <img  alt="Failed to load poster" style={{width:'100%'}}src={require(`../assets/images/${this.props.location.state.im}`)}></img>  }


        </div>
        <div className="description" style={{overflow:'auto'}}>
          <h1>{this.props.location.state.event}</h1>
          <img src={QR} style={{height:'75%'}} alt=""/>
          <a href="https://goo.gl/forms/psBBt1Pz0KKmKagl2">Registration Link</a>
          <p  style={{fontSize:'15px'}}>
          {this.props.location.state.desc}
          </p>
        </div>
      </div>
      {/* <div class="blog-card alt">
        <div class="meta">
          <div class="photo" style={{backgroundImage:" url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-2.jpg)"}}></div>
          <ul class="details">
            <li class="author"><a href="/">Jane Doe</a></li>
            <li class="date">July. 15, 2015</li>
            <li class="tags">
              <ul>
                <li><a href="/">Learn</a></li>
                <li><a href="/">Code</a></li>
                <li><a href="/">JavaScript</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="description">
          <h1>Mastering the Language</h1>
          <h2>Java is not the same as JavaScript</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
          <p class="read-more">
            <a href="/">Read More</a>
          </p>
        </div>
      </div> */}
      
        </div>
     
        
    )
  }
}

export default Events;
