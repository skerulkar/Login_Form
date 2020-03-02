import React, { Component } from 'react';
import { BrowserRouter as  Router,Redirect, Link} from 'react-router-dom';
import "../styles/Login.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Password extends Component{
    constructor() {
        super();

        this.state = {
            npwd: '',
            pwd:'',
            successs:true
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let name = target.name;
        let value = target.value;
        this.setState({
          [name]: value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        if(this.state.successs===true){
            toast.success('passowrd changed successfully', {
                position: "top-center",
                autoClose: true,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
                });
        }
    }

    render(){
        return(
            <Router>
                  <ToastContainer
                    position="top-center"
                    autoClose={true}
                    newestOnTop={false}
                    hideProgressBar={false}
                    closeOnClick= {true}
                    rtl={false}
                    pauseOnHover={true}
                    draggable={true}
                    />
                <div className="container-fluid center color-background">

                 <div className="row">


                    <div className="col-6">
                    <form onSubmit={this.handleSubmit}>
                        <label name="inputPassowrd" className="sr-only">Old Passoword</label>
                        <input type="password" id="inputPassowrd" className="form-control gap" placeholder="Old Passoword" autoFocus="" name="pwd" value={this.state.pwd} onChange={this.handleChange} required/>
                        <label name="inputNewPassword" className="sr-only"> New Password</label>
                        <input type="password" id="inputNewPassword" className="form-control gap" placeholder="New Password" name="npwd" value ={this.state.npwd}  onChange={this.handleChange} required/>
                        
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <button className="btn btn-md btn-primary btn-block signin-btn">Change Password</button>
                                </div>
                            </div>
                        </div>
                    </form>
                    </div>

                    
                    </div>  
                </div>
            </Router>
        );
    }
}

export default Password;