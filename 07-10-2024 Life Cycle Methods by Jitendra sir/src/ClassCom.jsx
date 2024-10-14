import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default class ClassCom extends Component {
    constructor(props) {
        super();
        this.state = { count: 0 };
    }
    increment = () => {
        this.setState({ count: this.state.count + 1 })
    }
    decrement = () => {
        this.setState({ count: this.state.count - 1 })
    }

    render() {
        return (
            <div>
                <h1>Counter Using State</h1>
                <h1>{this.state.count}</h1>
                <h1>{this.state.name}</h1>
                <button onClick={this.increment}> + </button>
                <button onClick={this.decrement}> - </button>
            </div>
        )
    }
}

