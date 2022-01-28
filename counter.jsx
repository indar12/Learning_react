import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        imageURL: "https://picsum.photos/200"
    };
    render() {
        return (
            <div>
                <img src={this.state.imageURL} alt="" />
                <span>{this.formatCount()}</span>
                <h1>Helsdvh lo worl\d</h1>
                <button>increment</button>
            </div>
        );
    }
    formatCount() {
        const { count } = this.state;
        const x = <h1>dfjgjd</h1>;
        return count === 0 ? x : count;
    }
}

export default Counter;