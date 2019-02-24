import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/animate.min.css';
import '../assets/css/style.css';
import '../assets/css/font-awesome.min.css';
import '../assets/bootstrap/css/bootstrap.css';
// import office from '../assets/img/slider/Office.png';
import impulse from '../assets/images/impulse.png';
import Icfai from '../assets/images/ICFAI.jpg';
import logo from '../assets/images/ifhe new logo.jpg';



class Navbar extends Component {
  render() {
    return (
      <div >
        <nav style={{backgroundColor:"#eee",marginBottom:"0px"}} id="navbar-section" className="navbar navbar-default navbar-static-top navbar-sticky" role="navigation">
        <div className="container">
        <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-responsive-collapse">
                    <span className="sr-only">Toggle navigadation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>

                 {/* <a className="navbar-brand wow fadeInDownBig" href="/"><img className="office-logo" style={{height:"200px",width:"200px",paddingTop:"20px"}} src={Btech} alt="Office"/></a>      */}
                 <img src={Icfai} alt="Office" className="kl"></img>  
                 <img src={impulse} alt="Office" style={{marginLeft:"40px",width:"170px",height:"90px"}} ></img>  
                 <img src={logo} alt="IFHE" style={{marginLeft:"40px",width:"230px",height:"90px"}}/>
            </div>
            <div id="navbar-spy" className="collapse navbar-collapse navbar-responsive-collapse">
            {/* <img src={Icfai} alt="Office" style={{marginLeft:"400px"}} ></img>  */}
                <ul className="nav navbar-nav pull-right">
                {/* <img src={Icfai} alt="Office"  ></img>  */}
                
                    <li className="active">
                     
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
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
