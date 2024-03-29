import React, { Component } from 'react';
import axios from 'axios';


class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            enrollment: '',
            branch:'',
            phone: '',
            gender:'',
            errors: {}
        }
        this.submitHandler=this.submitHandler.bind(this)
    }
    changeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    submitHandler(event) {
        event.preventDefault();
        const loginUser = {
            name: this.state.name,
            email: this.state.email,
            enrollment: this.state.enrollment,
            phone: this.state.phone,
            branch: this.state.branch,
            gender:this.state.gender
        };
        axios.post('/api/users/register',loginUser)
        .then(res =>this.props.history.push('/'))
        .catch(err =>this.setState({errors:err.response.data}));
       
     
    }
    componentWillReceiveProps(nextProps){
        
        if(nextProps.error){
            this.setState({errors:nextProps.error});
        }
    }
    render() {
        const style = {
            height: "450px",
            frameborder: "0",
            scrolling: "no",
            marginheight: "0",
            marginwidth: "0"
        };
        const errors = this.state.errors;
        return (
            <div>
                <div className="container-fluid-kamn">
                    <div className="row">
                        <div>
                            <iframe width="100%" title="icfai" style={style} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15227.085750020755!2d78.2194444!3d17.4227531!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7a11b92963ba3ece!2sICFAI+Foundation+Of+Higher+Education+(IFHE)+University!5e0!3m2!1sen!2sin!4v1548691845143"></iframe>
                            <br></br>
                        </div>
                        <div className="col-sm-6 col-lg-7">
                            <div className="feedback-form">

                                <div id="contact-response"></div>

                                <form onSubmit={this.submitHandler}  id="contact-form">
                                    <fieldset>
                               
                                        <div className="form-group form-group-fullname">
                                            <label className="control-label" style={{color:'white'}}>Name *</label>
                                            <input type="text" className="form-control" 
                                            name="name" id="fullname" placeholder="Enter Your Name"
                                            value={this.state.name}
                                            onChange={(event) => this.changeHandler(event)} />
                                                  {errors.name && (
                                        <div className="invalid-feedback" style={{color:"white"}}>{errors.name}</div>
                                    )}
                                        </div>
                                      
                                        <div className="form-group form-group-fullname">
                                            <label className="control-label" style={{color:'white'}}>ENROLLMENT *</label>
                                            <input type="text" className="form-control" 
                                            name="enrollment" id="fullnam" placeholder="Enter Your Entrollment"
                                            value={this.state.enrollment}
                                            onChange={(event) => this.changeHandler(event)} />
                                               {errors.enrollment && (
                                        <div className="invalid-feedback" style={{color:"white"}}>{errors.enrollment}</div>
                                    )}
                                        </div>
                                     

                                        <div className="form-group form-group-email">
                                            <label className="control-label" style={{color:'white'}}>E-MAIL *</label>
                                            <input type="text" className="form-control" 
                                            name="email" id="email" placeholder="Enter Your E-Mail"
                                            value={this.state.email} 
                                            onChange={(event) => this.changeHandler(event)}/>
                                             {errors.email && (
                                        <div className="invalid-feedback" style={{color:"white"}}>{errors.email}</div>
                                    )}
                                        </div>
                                       
                                        <div className="form-group form-group-fullname">
                                            <label className="control-label" style={{color:'white'}}>Branch *</label>
                                            <input type="text" className="form-control"
                                             name="branch" id="fullnam" placeholder="Enter Your Branch"
                                             value={this.state.branch}
                                             onChange={(event) => this.changeHandler(event)} />
                                               {errors.branch && (
                                        <div className="invalid-feedback" style={{color:"white"}}>{errors.branch}</div>
                                    )}
                                        </div>
                                      
                                        <div className="form-group form-group-fullname">
                                            <label className="control-label" style={{color:'white'}}>Phone Number *</label>
                                            <input type="number" className="form-control"
                                             name="phone" id="fullnam" placeholder="Enter Your Phone Number"
                                             value={this.state.phone}
                                             onChange={(event) => this.changeHandler(event)} />
                                               {errors.phone && (
                                        <div className="invalid-feedback" style={{color:"white"}}>{errors.phone}</div>
                                    )}
                                        </div>
                                      
                                        <div className="container">

                                        <label className="radio-inline" style={{color:'white'}}>
                                            <input type="radio" name="gender" 
                                            onClick={()=>this.setState({gender:"male"})}
                                         
                                            />Male
                                            </label>

                                        <label className="radio-inline" style={{color:'white'}}>
                                            <input type="radio" name="gender"
                                            onClick={()=>this.setState({gender:"female"})}
                                           
                                            />Female
                                            </label>
                                            {errors.gender && (
                                        <div className="invalid-feedback" style={{color:"white  "}}>{errors.gender}</div>
                                    )}
                                            </div>
                                      
                                            <br></br><br></br>


                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                        <div className="col-sm-4 col-lg-3 col-lg-offset-1">
                        <h4 style={{color: "white", marginTop: 17 + "px"}}>Find us at:</h4>
                    <p style={{color:'white'}}>IFHE Hyderabad</p>
                    <p style={{color:'white'}}><b>Contact:</b></p>
                    <p style={{color:'white'}}>8978619904</p>
                    <p style={{color:'white'}}>7093881982</p>
                    <br></br>

                            <br></br>
                            <br /><br /><br />


                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Register;
