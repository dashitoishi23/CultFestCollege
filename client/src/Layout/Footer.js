import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/animate.min.css';
import '../assets/css/style.css';
import '../assets/css/font-awesome.min.css';
import '../assets/bootstrap/css/bootstrap.css';

class Footer extends Component {
  render() {
    return (
        
        <footer >
      <div className="container">
            <div className="row">
            <div className="col-md-4">
            <h3><i className="fa fa-map-marker"></i> Contact:</h3>
                    <p className="footer-contact">
               IFHE Campus, Dontanapalli, Shankarpally Road, Hyderabad, Telangana 501503
                      <br></br>
                        Phone: 040-23479725 / 040-23479732 Mobile: 9640011173 
                    </p>
                </div>
                <div className="col-md-4">
                    <h3><i className="fa fa-external-link"></i><Link to="/">Home</Link></h3>
                    <p> <Link to="/highlights">Highlights</Link></p>
                    <p> <Link to="/team">Team</Link></p>
                    <p> <Link to="/register">Register</Link></p>
              
                </div>
                <div className="col-md-4">
                <h3><i className="fa fa-heart"></i> Socialize</h3>
                <div id="social-icons">
                      <a href="/" className="btn-group linkedin">
                        <i className="fa fa-linkedin-square"></i>
                    </a>
                      <a href="/" className="btn-group facebook">
                        <i className="fa fa-facebook"></i>
                    </a>
                </div>
              </div>    <br/>
        </div>   
      </div><br />
     <h5 style={{textAlign:"center",color:"white"}}>&copy; 2019 All Rights Reserved by The ICFAI Group</h5> 
      

      </footer>
    )
  }
}

export default Footer;