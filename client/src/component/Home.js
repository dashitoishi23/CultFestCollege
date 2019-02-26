import React, { Component } from 'react';
import Slide1 from '../assets/images/impulse4.jpg';
import Slide2 from '../assets/images/impulse3.jpg';
import Slide3 from '../assets/images/impulse5.jpg';
import '../assets/css/animate.min.css';
import '../assets/css/style.css';
import '../assets/css/font-awesome.min.css';
import '../assets/bootstrap/css/bootstrap.css';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
        <div>
        <section id="carousel-section" className="section-global-wrapper"> 
        <div className="container-fluid-kamn">
            <div className="row">
                <div id="carousel-1" className="carousel slide" data-ride="carousel">

                 
                    <ol className="carousel-indicators visible-lg">
                        <li data-target="#carousel-1" data-slide-to="0" className="active"></li>
                        <li data-target="#carousel-1" data-slide-to="1"></li>
                        <li data-target="#carousel-1" data-slide-to="2"></li>
                    </ol>
        
                    
                    <div className="carousel-inner" role="listbox">
                       
                        <div className="item active">
                            <img src={Slide1} style={{height:"470px",width:"100%"}}  aria-hidden alt="Image of second carousel."/>
                            <div className="carousel-caption">
                               
                            </div>
                        </div>
                      
                        <div className="item">
                            <img src={Slide2} style={{height:"470px",width:"100%"}} aria-hidden alt="Image of second carousel."/>
                            <div className="carousel-caption">
                              
                            </div>
                        </div>
                  
                        <div className="item">
                            <img src={Slide3} style={{height:"470px",width:"100%"}} aria-hidden alt="Image of third carousel."/>
                            <div className="carousel-caption">
                            
                            </div>
                        </div>
                       
                    </div>
        
                   
                    <a className="left carousel-control" href="#carousel-1" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left"></span>
                    </a>
                    <a className="right carousel-control" href="#carousel-1" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right"></span>
                    </a>
                </div>
            </div>
        </div>
    </section>



    <section id="services" className="services-section section-global-wrapper">
        <div className="container">
            <div className="row">
                <div className="services-header">
                    <h3 className="services-header-title">EVENTS</h3>
                    <p className="services-header-body"><em>Join in on the fun with these events</em>  </p><hr></hr>
                </div>
            </div>

            <p className="services-header-title" style={{fontSize:'35px'}}><em>DAY 1 - 28th February 2019</em></p>
     
            <div className="row services-row services-row-head services-row-1">
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div className="services-group wow animated fadeInLeft" data-wow-offset="40">
                        <p className="services-icon"><span className="fa fa-cube fa-5x"></span></p>
                        <h4 className="services-title">Line Follower</h4>
                        <p className="services-body">An event organized by ABC/Paritantra</p>
                        <p className="services-body">11 AM to 12:30 PM</p>
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
        
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div className="services-group wow animated zoomIn" data-wow-offset="40">
                        <p className="services-icon"><i className="fa fa-cube fa-5x"></i></p>
                        <h4 className="services-title">Idea Competition</h4>
                        <p className="services-body">An event organized by Innozant/I2/Paritantra</p>
                        <p className="services-body">11:30 AM to 1 PM</p>
                        <p className="services-more"><Link to={{
                            pathname:'/event',
                            state:{
                                event: 'Idea Competition',
                                im: '',
                                desc: 'Have an idea ?\nThen here is your opportunity to prove your talent and get your idea recognised by the entrepreneur experts and setting your idea in right path and gaining knowledge from experts. how to pitch your idea to investors and win exciting cash prizes and become a full fledged entrepreneur.\n11:30 PM to 1 PM'
                            }
                        }}>Find Out More</Link></p>
                    </div>
                </div>
        
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div className="services-group wow animated fadeInRight" data-wow-offset="40">
                        <p className="services-icon"><i className="fa fa-cube fa-5x"></i></p>
                        <h4 className="services-title">Photoshop</h4>
                        <p className="services-body">An event organized by Photography Club</p>
                        <p className="services-body">11 AM to 1 PM</p>
                                              <p className="services-more"><Link to={{
                            pathname:'/event',
                            state:{
                                event: 'Photoshop',
                                im: '',
                                desc: 'An event organized by Photography Club'
                            }
                        }}>Find Out More</Link></p>
                    </div>        
                </div>
            </div>
         
            <div className="row services-row services-row-tail services-row-2">
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div className="services-group wow animated fadeInLeft" data-wow-offset="40">
                        <p className="services-icon"><span className="fa fa-cube fa-5x"></span></p>
                        <h4 className="services-title">Hackathon</h4>
                        <p className="services-body">An event organized by ABC</p>
                        <p className="services-body">11 AM to 1:30 PM</p>
                        <p className="services-more"><Link to={{
                            pathname:'/event',
                            state:{
                                event: 'Hackathon',
                                im: 'Hackathon.jpg',
                                desc: 'A Theme will be given on Day1. By Day 2 a project must be done related to the theme'
                            }
                        }}>Find Out More</Link></p>
                    </div>
                </div>
        
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div className="services-group wow animated zoomIn" data-wow-offset="40">
                        <p className="services-icon"><i className="fa fa-cube fa-5x"></i></p>
                        <h4 className="services-title">Unsolve 360</h4>
                        <p className="services-body">An event organized by 4th Year Students</p>
                        <p className="services-body">2 PM to 3 PM</p>
                        <p className="services-more"><Link to={{
                            pathname:'/event',
                            state:{
                                event: 'Unsolve 360',
                                im: '',
                                desc: 'An event organized by 4th Year Students'
                            }
                        }}>Find Out More</Link></p>
                    </div>
                </div>
        
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div className="services-group wow animated fadeInRight" data-wow-offset="40">
                        <p className="services-icon"><i className="fa fa-cube fa-5x"></i></p>
                        <h4 className="services-title">Circuit Digest</h4>
                        <p className="services-body">An event organized by ABC/Paritantra/Yantrikee</p>
                        <p className="services-body">2 PM to 3:30 PM</p>
                        <p className="services-more"><Link to={{
                            pathname:'/event',
                            state:{
                                event: 'Circuit Digest',
                                im:'',
                                desc: 'Round 1 - Quiz\nRound 2- A circuit will be given on paper which should be assembled on Bread board and output must be shown'
                            }
                        }}>Find Out More</Link></p>
                    </div>
                </div>
            </div>
            <div className="row services-row services-row-tail services-row-2">
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div className="services-group wow animated fadeInLeft" data-wow-offset="40">
                        <p className="services-icon"><span className="fa fa-cube fa-5x"></span></p>
                        <h4 className="services-title">Robo War</h4>
                        <p className="services-body">An event organized by Yantrikee/ABC/Paritantra</p>
                        <p className="services-body">11 AM to 4 PM</p>
                        <p className="services-more"><Link to={{
                            pathname:'/event',
                            state:{
                                event:'Robo War',
                                im: '',
                                desc: 'An event organized by Yantrikee/ABC/Paritantra'
                            }
                        }}>Find Out More</Link></p>
                    </div>
                </div>
        
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div className="services-group wow animated zoomIn" data-wow-offset="40">
                        <p className="services-icon"><i className="fa fa-cube fa-5x"></i></p>
                        <h4 className="services-title">Gaming</h4>
                        <p className="services-body">An event organized by ABC</p>
                        <p className="services-body">2:30 PM to 4:30 PM</p>
                        <p className="services-more"><Link to={{
                            pathname:'/event',
                            state:{
                                event: 'Gaming',
                                im: '',
                                desc: 'An event organized by ABC'
                            }
                        }}>Find Out More</Link></p>
                    </div>
                </div>
        
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div className="services-group wow animated fadeInRight" data-wow-offset="40">
                        <p className="services-icon"><i className="fa fa-cube fa-5x"></i></p>
                        <h4 className="services-title">Blind Coding</h4>
                        <p className="services-body">An event organized by ABC</p>
                        <p className="services-body">2:30 PM to 4:30 PM</p>
                        <p className="services-more"><Link to={{
                            pathname:'/event',
                            state:{
                                event: 'Blind Coding',
                                im: '',
                                desc: 'Monitor will be off.\nThe student must code according to the problem statement'
                            }
                        }}>Find Out More</Link></p>
                    </div>
                </div>
            </div>
            <div className="row services-row services-row-tail services-row-2">
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div className="services-group wow animated fadeInLeft" data-wow-offset="40">
                        <p className="services-icon"><span className="fa fa-cube fa-5x"></span></p>
                        <h4 className="services-title">RC Balloon</h4>
                        <p className="services-body">An event organized by Yantrikee</p>
                        <p className="services-body">2PM to 4:30 PM</p>
                        <p className="services-more"><Link to={{
                            pathname:'/event',
                            state:{
                                event: 'RC Balloon',
                                im: 'RC Balloon.jpg',
                                desc: 'An event organized by Yantrikee'
                            }
                        }}>Find Out More</Link></p>
                    </div>
                </div>
        
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div className="services-group wow animated zoomIn" data-wow-offset="40">
                        <p className="services-icon"><i className="fa fa-cube fa-5x"></i></p>
                        <h4 className="services-title">Assembler-I2</h4>
                        <p className="services-body">FUN EVENT</p>
                        <p className="services-body">2 PM to 4 PM
                        </p>
                        <p className="services-more"><Link to={{
                            pathname:'/event',
                            state:{
                                event: 'Assembler-I2',
                                im: '',
                                desc: 'An event organized by I2'
                            }
                        }}>Find Out More</Link></p>
                    </div>
                </div>
        
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div className="services-group wow animated fadeInRight" data-wow-offset="40">
                        <p className="services-icon"><i className="fa fa-cube fa-5x"></i></p>
                        <h4 className="services-title">Maze Runner</h4>
                        <p className="services-body">An event organized by all clubs</p>
                        <p className="services-body">4 PM to 5:30 PM</p>
                        <p className="services-more"><Link to={{
                            pathname:'/event',
                            state:{
                                event: 'Maze Runner',
                                im: '',
                                desc: 'An event organized by all clubs'
                            }
                        }}>Find Out More</Link></p>
                    </div>
                </div>
            </div>
            <p className="services-header-title" style={{fontSize:'35px'}}><em>DAY 2 - 1st March 2019</em></p>
            <div className="row services-row services-row-tail services-row-2">
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div className="services-group wow animated fadeInLeft" data-wow-offset="40">
                        <p className="services-icon"><span className="fa fa-cube fa-5x"></span></p>
                        <h4 className="services-title">Hackathon</h4>
                        <p className="services-body">An event organized by ABC</p>
                        <p className="services-body">10 AM to 1 PM</p>
                        <p className="services-more"><Link to={{
                            pathname:'/event',
                            state:{
                                event: 'Hackathon',
                                im: 'Hackathon.jpg',
                                desc: 'By Day 2 a project must be done related to the theme'
                            }
                        }}>Find Out More</Link></p>
                    </div>
                </div>
        
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div className="services-group wow animated zoomIn" data-wow-offset="40">
                        <p className="services-icon"><i className="fa fa-cube fa-5x"></i></p>
                        <h4 className="services-title">Track Arena</h4>
                        <p className="services-body">An event organized by ABC/Paritantra</p>
                        <p className="services-body">10:30 AM to 12:30 PM</p>
                        <p className="services-more"><Link to={{
                            pathname:'/event',
                            state:{
                                event: 'Track Arena',
                                im: '',
                                desc: 'An event organized by ABC/Paritantra'
                            }
                        }}>Find Out More</Link></p>
                    </div>
                </div>
        
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div className="services-group wow animated fadeInRight" data-wow-offset="40">
                        <p className="services-icon"><i className="fa fa-cube fa-5x"></i></p>
                        <h4 className="services-title">CREO</h4>
                        <p className="services-body">An event organized by Yantrikee</p>
                        <p className="services-body">11 AM to 12 PM</p>
                        <p className="services-more"><Link to={{
                            pathname:'/event',
                            state:{
                                event: 'CREO',
                                im: '',
                                desc: 'An event organized by Yantrikee'
                            }
                        }}>Find Out More</Link></p>
                    </div>
                </div>
            </div>

                        <div className="row services-row services-row-tail services-row-2">
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div className="services-group wow animated fadeInLeft" data-wow-offset="40">
                        <p className="services-icon"><span className="fa fa-cube fa-5x"></span></p>
                        <h4 className="services-title">Debates and Quiz</h4>
                        <p className="services-body">An event organized by I2/Innozant/Paritantra/Yantrikee</p>
                        <p className="services-body">11 AM to 1 PM</p>
                        <p className="services-more"><Link to={{
                            pathname:'/event',
                            state:{
                                event: 'Debates and Quiz',
                                im: '',
                                desc: 'An event organized by I2/Innozant/Paritantra/Yantrikee'
                            }
                        }}>Find Out More</Link></p>
                    </div>
                </div>
        
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div className="services-group wow animated zoomIn" data-wow-offset="40">
                        <p className="services-icon"><i className="fa fa-cube fa-5x"></i></p>
                        <h4 className="services-title">Buzz & Brainworm</h4>
                        <p className="services-body">An event organized by I2</p>
                        <p className="services-body">10:30 AM to 12:30 PM</p>
                        <p className="services-more"><Link to={{
                            pathname:'/event',
                            state:{
                                event: 'Buzz & Brainworm',
                                im: '',
                                desc: 'An event organized by I2'
                            }
                        }}>Find Out More</Link></p>
                    </div>
                </div>
        
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div className="services-group wow animated fadeInRight" data-wow-offset="40">
                        <p className="services-icon"><i className="fa fa-cube fa-5x"></i></p>
                        <h4 className="services-title">Geeks of Python</h4>
                        <p className="services-body">An event organized by Yantrikee/ABC</p>
                        <p className="services-body">2 PM to 3:30 PM</p>
                        <p className="services-more"><Link to={{
                            pathname:'/event',
                            state:{
                                event: 'Geeks of Python',
                                im: '',
                                desc: 'An event organized by Yantrikee/ABC'
                            }
                        }}>Find Out More</Link></p>
                    </div>
                </div>
            </div>

                        <div className="row services-row services-row-tail services-row-2">
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div className="services-group wow animated fadeInLeft" data-wow-offset="40">
                        <p className="services-icon"><span className="fa fa-cube fa-5x"></span></p>
                        <h4 className="services-title">Line Follower Robo</h4>
                        <p className="services-body">An event organized by ABC/Paritantra</p>
                        <p className="services-body">2 PM to 3:30 PM</p>
                        <p className="services-more"><Link to={{
                            pathname:'/event',
                            state:{
                                event: 'Line Follower Robo',
                                im: '',
                                desc: 'An event organized by ABC/Paritantra'
                            }
                        }}>Find Out More</Link></p>
                    </div>
                </div>
        
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div className="services-group wow animated zoomIn" data-wow-offset="40">
                        <p className="services-icon"><i className="fa fa-cube fa-5x"></i></p>
                        <h4 className="services-title">Mobile Photography</h4>
                        <p className="services-body">An event organized by Photography Club</p>
                        <p className="services-body">2:30 PM to 4 PM</p>
                        <p className="services-more"><Link to={{
                            pathname:'/event',
                            state:{
                                event: 'Mobile Photography',
                                im: '',
                                desc: 'An event organized by Photography Club'
                            }
                        }}>Find Out More</Link></p>
                    </div>
                </div>
        
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div className="services-group wow animated fadeInRight" data-wow-offset="40">
                        <p className="services-icon"><i className="fa fa-cube fa-5x"></i></p>
                        <h4 className="services-title">RC Football</h4>
                        <p className="services-body">An event organized by Yantrikee</p>
                        <p className="services-body">2 PM to 4:30 PM</p>
                        <p className="services-more"><Link to={{
                            pathname:'/event',
                            state:{
                                event: 'RC Football',
                                im: 'RC Football.jpg',
                                desc: 'An event organized by Yantrikee'
                            }
                        }}>Find Out More</Link></p>
                    </div>
                </div>
            </div>
            <div className="row services-row services-row-tail services-row-2">
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div className="services-group wow animated fadeInLeft" data-wow-offset="40">
                        <p className="services-icon"><span className="fa fa-cube fa-5x"></span></p>
                        <h4 className="services-title">Rubik's Cube</h4>
                        <p className="services-body">An event organized by Yantrikee</p>
                        <p className="services-body">2 PM to 4 PM</p>
                        <p className="services-more"><Link to={{
                            pathname:'/event',
                            state:{
                                event: "Rubik's Cube",
                                im:'',
                                desc: 'An event organized by Yantrikee'
                            }
                        }}>Find Out More</Link></p>
                    </div>
                </div>
        
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div className="services-group wow animated zoomIn" data-wow-offset="40">
                        <p className="services-icon"><i className="fa fa-cube fa-5x"></i></p>
                        <h4 className="services-title">Logo Guessing</h4>
                        <p className="services-body">2 PM to 4 PM</p>
                        <p className="services-more"><Link to={{
                            pathname:'/event',
                            state:{
                                event: 'Logo Guessing',
                                im: '',
                                desc: 'An event organized by ITS'
                            }
                        }}>Find Out More</Link></p>
                    </div>
                </div>
        
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div className="services-group wow animated fadeInRight" data-wow-offset="40">
                        <p className="services-icon"><i className="fa fa-cube fa-5x"></i></p>
                        <h4 className="services-title">Treasure Hunt</h4>
                        <p className="services-body">An event organized by Innozant/I2</p>
                        <p className="services-body">4 PM to 5:30 PM</p>
                        <p className="services-more"><Link to={{
                            pathname:'/event',
                            state:{
                                event: 'Treasure Hunt',
                                im: '',
                                desc: 'An event organized by Innozant/I2'
                            }
                        }}>Find Out More</Link></p>
                    </div>
                </div>
            </div>
            <p className="services-header-title" style={{fontSize:'35px'}}><em>DAY 3 - 2nd March 2019</em></p>

                        <div className="row services-row services-row-tail services-row-2">
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div className="services-group wow animated fadeInLeft" data-wow-offset="40">
                        <p className="services-icon"><span className="fa fa-cube fa-5x"></span></p>
                        <h4 className="services-title">C-Debugging</h4>
                        <p className="services-body">An event organized by ABC/Yantrikee</p>
                        <p className="services-body">10 AM to 11 AM</p>
                        <p className="services-more"><Link to={{
                            pathname:'/event',
                            state:{
                                event: 'C-Debugging',
                                im: 'CDebug.jpg',
                                desc: 'A code will be given which should be debugged'
                            }
                        }}>Find Out More</Link></p>
                    </div>
                </div>
        
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div className="services-group wow animated zoomIn" data-wow-offset="40">
                        <p className="services-icon"><i className="fa fa-cube fa-5x"></i></p>
                        <h4 className="services-title">Modelling,Longest Chain,Destroy It</h4>
                        <p className="services-body">An event organized by Paritantra/I2</p>
                        <p className="services-body">10 AM to 12 PM</p>
                        <p className="services-more"><Link to={{
                            pathname:'/event',
                            state:{
                                event: 'Modelling,Longest Chain,Destroy It',
                                im: '',
                                desc: 'An event organized by Paritanra/I2'
                            }
                        }}>Find Out More</Link></p>
                    </div>
                </div>
        
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div className="services-group wow animated fadeInRight" data-wow-offset="40">
                        <p className="services-icon"><i className="fa fa-cube fa-5x"></i></p>
                        <h4 className="services-title">Programming With Java</h4>
                        <p className="services-body">An event organized by ABC/Yantrikee</p>
                        <p className="services-body">11 AM to 12 PM</p>
                        <p className="services-more"><Link to={{
                            pathname:'/event',
                            state:{
                                event: 'Programming With Java',
                                im: '',
                                desc: 'An event organized by ABC/Yantrikee'
                            }
                        }}>Find Out More</Link></p>
                    </div>
                </div>
            </div>

                        <div className="row services-row services-row-tail services-row-2">
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div className="services-group wow animated fadeInLeft" data-wow-offset="40">
                        <p className="services-icon"><span className="fa fa-cube fa-5x"></span></p>
                        <h4 className="services-title">Group Discussion or Debate</h4>
                        <p className="services-body">An event organized by Paritantra/Innozant</p>
                        <p className="services-body">11 AM to 12:30 PM</p>
                        <p className="services-more"><Link to={{
                            pathname:'/event',
                            state:{
                                event: 'Group Discussion or Debate',
                                im: '',
                                desc: 'An event organized by Paritantra/Innozant'
                            }
                        }}>Find Out More</Link></p>
                    </div>
                </div>
        
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div className="services-group wow animated zoomIn" data-wow-offset="40">
                        <p className="services-icon"><i className="fa fa-cube fa-5x"></i></p>
                        <h4 className="services-title">RC Race</h4>
                        <p className="services-body">An event organized by Yantrikee</p>
                        <p className="services-body">2 PM to 4 PM</p>
                        <p className="services-more"><Link to={{
                            pathname:'/event',
                            state:{
                                event: 'RC Race',
                                im: 'RC_Race.jpg',
                                desc: 'An event organized by Yantrikee'
                            }
                        }}>Find Out More</Link></p>
                    </div>
                </div>
        
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div className="services-group wow animated fadeInRight" data-wow-offset="40">
                        <p className="services-icon"><i className="fa fa-cube fa-5x"></i></p>
                        <h4 className="services-title">Lazy Cyclist</h4>
                        <p className="services-body">An event organized by I2</p>
                        <p className="services-body">2 PM to 3 PM</p>
                        <p className="services-more"><Link to={{
                            pathname:'/event',
                            state:{
                                event: 'Lazy Cyclist',
                                im: '',
                                desc: 'An event organized by I2'
                            }
                        }}>Find Out More</Link></p>
                    </div>
                </div>
            </div>
            
            <div className="row services-row services-row-tail services-row-2">
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div className="services-group wow animated fadeInLeft" data-wow-offset="40">
                        <p className="services-icon"><span className="fa fa-cube fa-5x"></span></p>
                        <h4 className="services-title">Paper Presentation</h4>
                        <p className="services-body">An event organized by all clubs</p>
                        <p className="services-body">11 AM to 3 PM</p>
                        <p className="services-more"><Link to={{
                            pathname:'/event',
                            state:{
                                event: 'Paper Presentation',
                                im: '',
                                desc:'IEEE FORMAT, MAXIMUM 6 PAGES. Topics: Robotics Data Science Communication Systems Sattelite communication Environmental Technology Advancements in Agricultural Technology Industry Automation Advancements in Technology in Day to day life Video Streaming between two planets. Keep Text to a minimum'
                            } 
                        }}>Find Out More</Link></p>
                    </div>
                </div>
        
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div className="services-group wow animated zoomIn" data-wow-offset="40">
                        <p className="services-icon"><i className="fa fa-cube fa-5x"></i></p>
                        <h4 className="services-title">Programming With Java</h4>
                        <p className="services-body">An event organized by Yantrikee</p>
                        <p className="services-body">2 PM to 4 PM</p>
                        <p className="services-more"><Link to={{
                            pathname:'/event',
                            state:{
                                event: 'Programming With Java',
                                im: '',
                                desc: 'An event organized by Yantrikee'
                            }
                        }}>Find Out More</Link></p>
                    </div>
                </div>

                                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div className="services-group wow animated zoomIn" data-wow-offset="40">
                        <p className="services-icon"><i className="fa fa-cube fa-5x"></i></p>
                        <h4 className="services-title">Ramp Walk and DJ</h4>
                        <p className="services-body">4:30 PM to 8 PM</p>
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
