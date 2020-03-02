import React, { Component } from 'react';
import { BrowserRouter as  Router, Link,Redirect} from 'react-router-dom';
import "../styles/Wallet.css";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactTooltip from 'react-tooltip';
import {findDOMNode} from 'react-dom';
import Password from "../components/Password"
import Dropdown from "../components/Dropdown"
import Task from "../components/Task"

class Wallet extends Component{
	
    state = {  
        userInput:0,walletAddress:[],getBalance:{},recentTrans:[],CDAG:[],editProfile:[],firstName:'',lastName:'',email:'',phoneNumber:1234567890,walletAdd:'',getProfile:{wallets:[]},
        password:'',npassword:'',successs:false
	}

	handleOnclick(e){
		e.preventDefault();
		
	}	

	componentDidMount(){

	axios.get()
		.then(res => {
			// console.log('User Price in ETHHHHHH With Margin: ',res.data);
			this.setState({price:res.data.result})
		})
	}

    render(){
        return(
		<Router>					
			<div>
				<div className="container">
				<ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnVisibilityChange draggable pauseOnHover/>
				<nav className="navbar navbar-expand-lg navbar-light navbar-color">
					<a className="navbar-brand" href="www.canndollar.com">
						<img style={{width: '100px',height: '70px'}} src="../images/oops!.jpg"></img>
					</a>{/* <a className="navbar-brand" href="#" style={{fontWeight: '600',fontSize: '30px'}}>CannDollar</a> */}
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav mr-auto"></ul>
						<form className="form-inline my-2 my-lg-0">
							<ul className="nav nav-tabs" id="myTab" role="tablist">
								<li className="nav-item">
									<a className="nav-link" id="editprofile-tab" data-toggle="tab" href="#editprofile" role="tab" aria-controls="editprofile" aria-selected="false" onClick={this.toggle}> <b>{this.state.getProfile.firstName}</b>
									</a>
								</li>
							</ul>{/* <b><a href="#editprofile" style={{marginRight:'20px',textDecoration:'none'}}>{this.state.getProfile.firstName}</a></b> */}
							<Link to="/" onClick={()=>this.props.history.push('/')}>
								<button className="btn btn-outline-danger my-2 my-sm-0">Logout</button>
							</Link>
						</form>
					</div>
				</nav>
			</div>

	<div className="container mt-3">
	<ul className="nav nav-tabs" id="myTab" role="tablist">
		<li className="nav-item"> <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
		</li>
		<li className="nav-item"> <a className="nav-link" id="task-tab" data-toggle="tab" href="#task" role="tab" aria-controls="task" aria-selected="true">Task</a>
		</li>
		<li className="nav-item"> <a className="nav-link" id="user-tab" data-toggle="tab" href="#user" role="tab" 			aria-controls="user" aria-selected="false" onClick={this.handleWalletAddress}>Change Password</a>
		</li>
	</ul>
	<div className="tab-content" id="myTabContent">
		<div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
		<h3 className="mt-3">Home</h3>
			<div className="mt-4 card">
				<Dropdown/>
			</div>
		</div>
		<div className="tab-pane fade show" id="task" role="tabpanel" aria-labelledby="task-tab">
		<h3 className="mt-3">List of Todos </h3>
			<div className="mt-4 card">
				
				<Task/>
			</div>
		</div>
		<div className="tab-pane fade" id="user" role="tabpanel" aria-labelledby="user-tab">
		<h3 className="mt-3"> Change Password </h3>
			<div className="mt-4 card">
				<Password />
			</div>
		</div>
	</div>
	</div>



</div>
</Router>
					  
        );
    }

}
export default Wallet;