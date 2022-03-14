import React, { Component } from "react";
import ColorFrame from "./ColorFrame";

import './content.css';

export default class Content extends Component{
    constructor(props){
        super(props)
        this.state = {
            color: 'blueviolet',
        }
    }
    render(){
        return (
        <main>
            <div>
                <ColorFrame color={this.state.color} />
                <input type="text" placeholder="Type~in any color" onChange={(e) => this.setState({color: e.target.value})} />
            </div>
        </main>
        )
    }
}