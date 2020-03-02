import React, { Component } from 'react';
import { BrowserRouter as  Router,Redirect, Link} from 'react-router-dom';
import "../styles/Login.css";
import axios from 'axios';

const API_URL ="http://jsonplaceholder.typicode.com/todos"

class Task extends Component{

    state = {
       
                id:"",
                title:"",
                completed:"",
        successs:true,
        list:[],
        _id:'',
        value:false
    };

    handleClick(_id){
        console.log('[id : ]',_id)
        const list=this.state.list.filter(list=>list.id!==_id);
        this.setState({
           list:list
        })
    }

    componentDidMount(){
        axios.get(API_URL)
        .then(res => {
            console.log('Response data: ',res.data);
            this.setState({list:res.data })
            localStorage.setItem("List", JSON.stringify(res.data))
        })
    }
    getValue=()=>{
        this.setState({
            value:true
        })
    }
    addItem=()=>{
         console.log("adding...",this.state.list)
         let {id,Completed,title}=this.state;
         let AddItem={
             id,
             title,
             Completed
         }
         console.log(AddItem)

        let olditem=[...this.state.list,{
            ...AddItem,
           
        }];
        console.log(olditem)
            this.setState({
                list: olditem
            })
        }

        handleInput=(e)=>{
          
            this.setState({ [e.target.id] : e.target.value })
          
        }

    render(){
        return(
            <Router>
                <div>
                    <div className="container">
                    <table className="table">
                            <thead className="thead-light">
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Completed</th>
                                    <th scope="col">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                    <tr>
                                        <td className="ChangeText_color">
                                        <input id="id" onChange={this.handleInput}type="number"/>
                                        </td>
                                        <td className="ChangeText_color">
                                        <input id="title" onChange={this.handleInput} type="text" />
                                        </td>
                                        <td className="ChangeText_color">
                                        <input id="Completed" onChange={this.handleInput} type="text"/>
                                        </td>
                                        <td className="ChangeText_color">
                                            <button onClick={()=>this.addItem()} className="btn btn-success btn-lg active">Add</button>
                                        </td>
                                    </tr>
                                {this.state.list&&this.state.list.map(todos => 
                                    <tr key={todos.id}>
                                        <td className="ChangeText_color">
                                            {todos.id}
                                        </td>
                                        <td className="ChangeText_color">
                                            {todos.title}
                                        </td>
                                        <td className="ChangeText_color">
                                            {todos.completed===true?'true':'false'}
                                        </td>
                                        <td className="ChangeText_color">
                                            <button className="btn btn-danger btn-lg active" onChange={this.handleChange} primary={false} onClick={() => this.handleClick(todos.id)}>Delete</button>
                                        </td>
                                    </tr>
                                    )
                                }
                                 
                            </tbody>
                        </table>
                
                    </div>
                </div>
            </Router>
        );
    }
}

export default Task;