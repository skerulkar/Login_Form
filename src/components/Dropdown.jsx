import React, { Component } from 'react';
import { BrowserRouter as  Router,Redirect, Link} from 'react-router-dom';
import "../styles/Login.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class Dropdown extends Component{

    state = {
        successs:true,
        getIdFromElement:'',
        enterpriseBasicProduct:{name: "Enterprise Basic",price: 1999, description: " Standard enterprise grade set up for pilot project and trial purposes. Dedicated infrastructure. Fully secure private blockchain."},
        businessAdvancedProduct:{name: "Business Advanced",price: 599, description: "Shared cloud private blockchain solution. Advanced SLA and tech support. Extra features such (Public Ethereum anchoring, IPFS etc)."},
        smallBusinessProduct:{name: "Small Business",price: 299, description: "Shared cloud private blockchain solution. Basic SLA and tech support."},
        free:{name: "Free",price: 0,description: "No support and no SLA. Used for trial and experimentation purposes."},
        testPurchase:{name: "Test Purchase",price: 1, description: "TEST REAL MONEY PURCHASE"}
    };


    handleOnclick=(event)=>{
        this.setState({ getIdFromElement: event.target.id });
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

        const enterpriseBasic = (
            <div className="card mt-3">
                <div className="container">
                    <h3><b>{this.state.enterpriseBasicProduct.name}</b></h3> 
                    <p>$ {this.state.enterpriseBasicProduct.price}</p> 
                    <div className="product">
                        <h3>Description:</h3>
                        <p style={{fontSize:'15px'}}>{this.state.enterpriseBasicProduct.description}</p>
                    </div>         
                </div>
            </div>
       )
       const testPurchase = (
        <div className="card mt-3">
            <div className="container">
                <h3><b>{this.state.testPurchase.name}</b></h3> 
                <p>$ {this.state.testPurchase.price}</p> 
                <div className="product">
                    <h3>Description:</h3>
                    <p style={{fontSize:'15px'}}>{this.state.testPurchase.description}</p>

                </div>         
            </div>
        </div>
   )
       const businessAdvanced = (
            <div className="card mt-3">
                <div className="container">
                <h3><b>{this.state.businessAdvancedProduct.name}</b></h3>
                <h3>$ {this.state.businessAdvancedProduct.price}</h3>
                    <div className="product">
                    <h3>Description:</h3>
                    <p style={{fontSize:'15px'}}>{this.state.businessAdvancedProduct.description}</p>
                    </div>         
                </div>
            </div>               
        )
        const smallBusiness = (
            <div className="card mt-3">
                <div className="container">
                <h3><b>{this.state.smallBusinessProduct.name}</b></h3>
                    <h3>$ {this.state.smallBusinessProduct.price}</h3>
                    <div className="product">
                        <h3>Description:</h3>
                        <p style={{fontSize:'15px'}}>{this.state.smallBusinessProduct.description}</p>
                    </div>         
                </div>
            </div>              
        )
        const free = (
            <div className="card mt-3">
            <div className="container">
            <h3><b>{this.state.free.name}</b></h3>
            <h3>$ {this.state.free.price} </h3>
                <div className="product">
                    <h3>Description:</h3>
                    <p style={{fontSize:'15px'}}>{this.state.free.description}</p>
                    <h4>Sit Back and Relax.</h4>
                </div>         
            </div>
        </div>                  
        )
        return(
            <Router>
                <div>
                    <div className="container">
                    <ToastContainer
                        position="top-center"
                        autoClose={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnVisibilityChange
                        draggable
                    /> 
                        <div className="btn-group">
                            <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                            </button>
                            <div className="dropdown-menu">
                                <p className="dropdown-item" onClick={this.handleOnclick} id="free">Free</p>
                                <p className="dropdown-item" onClick={this.handleOnclick} id="testPurchase">Test Purchase</p>
                                <p className="dropdown-item" onClick={this.handleOnclick} id="smallBusiness">Small Business</p>
                                <p className="dropdown-item" onClick={this.handleOnclick} id="businessAdvanced">Business Advanced</p>
                                <p className="dropdown-item" onClick={this.handleOnclick} id="enterpriseBasic">Enterprise Basic</p>
                                
                            </div>
                        </div>
                        {this.state.getIdFromElement==="free" ?free :((this.state.getIdFromElement==="enterpriseBasic") ? enterpriseBasic : (this.state.getIdFromElement==="businessAdvanced")? businessAdvanced:(this.state.getIdFromElement==="smallBusiness")? smallBusiness:(this.state.getIdFromElement==="testPurchase") ? testPurchase:free)}
                    </div>
                </div>
            </Router>
        );
    }
}

export default Dropdown;