import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Link } from 'react-router-dom';
import "../styles/Login.css";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Login extends Component {
    state = {
        email: '',
        password: '',
        successs: true,
        login:false
    };

    handleChange = (e) => {
        let target = e.target;
        let name = target.name;
        let value = target.value;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.email === " " || this.state.password === " ") {
                toast.successs('please fill all details', {
                position: "top-center",
                autoClose: true,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
            });
        } else if (this.state.email !== 'Skerulkar@gmail.com' && this.state.password !== "Gr8@work") {
            alert("Please enter valid email/Password")
        } else {
           this.setState({
               login:true
           })
       }
    }

    render() {
        // if (this.state.successs === true) {
        //     return <Redirect to="/wallet" />
        // }
        return (
            <Router>
                <ToastContainer
                    position="top-center"
                    autoClose={true}
                    newestOnTop={false}
                    hideProgressBar={false}
                    closeOnClick={true}
                    rtl={false}
                    pauseOnHover={true}
                    draggable={true}
                />
                <div className="container-fluid center color-background">
                    <div className="row">
                        <div className="col-4">
                        </div>

                        <div className="col-4">

                            <form onSubmit={this.handleSubmit}className="form-signin card">
                                <h3>Get Started With Login App</h3>
                                <label for="inputEmail" className="sr-only">Email</label>
                                <input type="email" id="inputEmail" className="form-control gap" placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange} required />

                                <label for="inputnewPassowrd" className="sr-only">new Passowrd</label>
                                <input type="password" id="inputnewPassowrd" className="form-control gap" placeholder="Password" autoFocus="" name="newPassowrd" value={this.state.newPassowrd} onChange={this.handleChange} required />

                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            {(this.state.login)?
                                            this.props.history.push('/wallet'):""
                                       }
                                            
                                            <button >LogIn</button>
                                        </div>

                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="col-4">
                        </div>

                    </div>
                </div>
            </Router>
        );
    }
}

export default Login;