import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/animate.min.css';
import '../assets/css/style.css';
import '../assets/css/font-awesome.min.css';
import '../assets/bootstrap/css/bootstrap.css';
// import office from '../assets/img/slider/Office.png';
import impulse from '../assets/images/triti.png';




class Navbar extends Component {
  render() {
    return (
      <div >
        <nav style={{backgroundColor:"white",marginBottom:"0px"}} id="navbar-section" className="navbar navbar-default navbar-static-top navbar-sticky" role="navigation">
        <div className="container">
        <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-responsive-collapse">
                    <span className="sr-only">Toggle navigadation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>

                 {/* <a className="navbar-brand wow fadeInDownBig" href="/"><img className="office-logo" style={{height:"200px",width:"200px",paddingTop:"20px"}} src={Btech} alt="Office"/></a>      */}
                 <img src={impulse} alt="Office" style={{width:"95px",height:"100px"}} ></img>  
            </div>
            <div id="navbar-spy" className="collapse navbar-collapse navbar-responsive-collapse">
            {/* <img src={Icfai} alt="Office" style={{marginLeft:"400px"}} ></img>  */}
                <ul className="nav navbar-nav pull-right">
                {/* <img src={Icfai} alt="Office"  ></img>  */}
                
                    <li className="active">
                     
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <Link to="/highlights">Highlights</Link>
                    </li>
                    <li>
                    <Link to="/team">DevTeam</Link>
                    </li>
                    <li>
                    <Link to="/register">Register</Link>
                    </li>
                </ul>         
            </div>
        </div>
        </nav>
      </div>
    )
  }
}

export default Navbar;
