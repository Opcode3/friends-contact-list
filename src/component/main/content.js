import './content.css';

import React, {Component} from 'react';

export default class Content extends Component{

    constructor(props){
        super(props);
        this.state = {
            first: 0,
            second: 0,
            operator: '',
            answer: 0

        }
    }

    submitHandler = (e) => {
        e.preventDefault();
        const first_value = Number(this.state.first)
        const second_value = Number(this.state.second)
        let sum = 0;
        switch(this.state.operator){
            case 'minus':
                sum = first_value - second_value;
                break;
            case 'div':
                sum = first_value / second_value;
                break;
            case 'mul':
                sum = first_value * second_value;
                break;
            case 'plus':
                sum = first_value + second_value;
                break;
        }

        this.setState({answer: sum})
    }

    render(){
        return (
            <main>
                <form onSubmit={this.submitHandler}>
                    <span>Numbers &amp; Arithmetic</span>
                    <input value={this.state.first} onChange={(e) => this.setState({first: e.target.value})}/>
                    <input value={this.state.second} onChange={(e) => this.setState({second: e.target.value})}/>
                    <label> {this.state.answer ? `Answer: ${this.state.answer} `:''}</label>
                    <div className='btnCover'>
                        <button className={this.state.operator == 'minus' ? 'active' :''} onClick={() => this.setState({operator: 'minus'})} title='minus operator'>Minus</button>
                        <button className={this.state.operator == 'plus' ? 'active' :''} onClick={() => this.setState({operator: 'plus'})} title='plus operator'>Plus</button>
                        <button className={this.state.operator == 'mul' ? 'active' :''} onClick={() => this.setState({operator: 'mul'})} title='multiply operator'>Multiply</button>
                        <button className={this.state.operator == 'div' ? 'active' :''} onClick={() => this.setState({operator: 'div'})} title='divide operator'>Divide</button>
                    </div>
                </form>
            </main>
            );
    }

}