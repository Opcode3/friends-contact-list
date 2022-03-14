import { type } from "@testing-library/user-event/dist/type";
import React, { Component } from "react";

import './content.css';
import ListItem from "./ListItem";

export default class Content extends Component{
    constructor(props){
        super(props)
        this.menu_api = [
            'https://jsonplaceholder.typicode.com/posts', 
            'https://jsonplaceholder.typicode.com/users', 
            'https://jsonplaceholder.typicode.com/comments'
                        ]
        this.state = {
            menu_id:0,
            data: [],
            isLoading: false
        }
        this.contentToggle = this.contentToggle.bind(this);
    }

    async api_call(){
        this.setState({isLoading: true});
            const response =  await fetch(this.menu_api[this.state.menu_id])
            const json_data = await response.json();
            this.setState({isLoading: false, data: json_data});
        // console.log(typeof this.state.data)
    }

    handleMenuClick(id){
        this.setState({menu_id: id});
        this.setState({isLoading: true});
        setTimeout(()=> {
            this.api_call();
        }, 1000)
    }

    async componentDidMount(){
        this.api_call()
    }

    contentToggle(data) {

        switch(this.state.menu_id){
            case 0:
                return (
                    <ListItem data={data}/>
                );
            case 1:
                return <ListItem data={data}/>
            case 2:
                return <ListItem data={data}/>
            default:
                return <h2>Ooooops, no data found</h2>;
        }

    }
    render(){
        return (
        <main>
            <nav>
                <ul>
                    <li key={1} onClick={()=> this.handleMenuClick(0)} className={this.state.menu_id == 0 ?"active": ""}>Posts</li>
                    <li key={2} onClick={()=> this.handleMenuClick(1)} className={this.state.menu_id == 1 ?"active": ""}>Users</li>
                    <li key={3} onClick={()=> this.handleMenuClick(2)} className={this.state.menu_id == 2 ?"active": ""}>Comments</li>
                </ul>
            </nav>
            <div className="data_list">
                {
                    this.state.isLoading ? "loading data..." :
                    this.contentToggle(this.state.data)
                    
                }

            </div>
        </main>
        )


    }
}