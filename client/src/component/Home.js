import React, { Component } from 'react';
import vid from '../assets/images/triti1.mp4';
import mcsher from '../assets/images/mcsher1.jpg';
import three from '../assets/images/threeory.jpg';
import zaeden from '../assets/images/zaeden1.jpg';
import '../assets/css/animate.min.css';
import '../assets/css/style.css';
import '../assets/css/font-awesome.min.css';
import '../assets/bootstrap/css/bootstrap.css';
import { Link } from 'react-router-dom';

class Home extends Component {


  render() {
    return (
        <div>
         <video style={{height:'100%',width:'100%'}}loop muted autoPlay playsInline>
            <source src={vid} type='video/mp4'/>
        </video>





    <section id="services" className="services-section section-global-wrapper">
        <div className="container">
            <div className="row">
                <div className="services-header">
                    <h3 className="services-header-title" style={{color:'white'}}>EVENTS</h3>
                    <p className="services-header-body"  style={{color:'white'}}><em>Join in on the fun with these events</em>  </p><hr></hr>
                </div>
            </div>

            <p className="services-header-title" style={{fontSize:'35px',color:'white'}}><em>DAY 1 - 15th March 2019</em></p>
     
            <div className="row services-row services-row-head services-row-1">
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div className="services-group wow animated zoomIn" data-wow-offset="40" >
                    <img src={three} alt="MC SHER" style={{display:'cover',height:'100%',width:'100%'}}/>
                        <h4 className="services-title">Threeory Band</h4>
                        <p className="services-body">A performance by Threeory Band!</p>
                        <p className="services-body">6 PM onwards</p>
                        <p className="services-more"><Link to={{
                            pathname:'/event',
                            state:{
                                event: 'Line Follower',
                                im: '',
                                desc: 'An event organized by ABC/Paritranta'
                            }
                        }}>Find Out More</Link></p>
                    </div>
                </div>
                </div>
        

        
                            <p className="services-header-title" style={{fontSize:'35px',color:'white'}}><em>DAY 2 - 16th March 2019</em></p>
            <div className="row services-row services-row-tail services-row-2">
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div className="services-group wow animated zoomIn" data-wow-offset="40" >
                    <img src={mcsher} alt="MC SHER" style={{display:'cover',height:'100%',width:'100%'}}/>
                        <h4 className="services-title">Threeory Band</h4>
                        <p className="services-body">A performance by Threeory Band!</p>
                        <p className="services-body">6 PM onwards</p>
                        <p className="services-more"><Link to={{
                            pathname:'/event',
                            state:{
                                event: 'Line Follower',
                                im: '',
                                desc: 'An event organized by ABC/Paritranta'
                            }
                        }}>Find Out More</Link></p>
                    </div>
                </div> 
            </div>
            <p className="services-header-title" style={{fontSize:'35px',color:'white'}}><em>DAY 3 - 17th March 2019</em></p>

                        <div className="row services-row services-row-tail services-row-2">
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div className="services-group wow animated zoomIn" data-wow-offset="40" >
                    <img src={zaeden} alt="MC SHER" style={{display:'cover',height:'100%',width:'100%'}}/>
                        <h4 className="services-title">Threeory Band</h4>
                        <p className="services-body">A performance by Threeory Band!</p>
                        <p className="services-body">6 PM onwards</p>
                        <p className="services-more"><Link to={{
                            pathname:'/event',
                            state:{
                                event: 'Line Follower',
                                im: '',
                                desc: 'An event organized by ABC/Paritranta'
                            }
                        }}>Find Out More</Link></p>
                    </div>
                </div> 

        

            </div>

 
            </div>
         </section>
    
        </div>      
    )
  }
}

export default Home;
