import { Component } from "react";

class Counter extends Component {
    state = {
        value: 0
    }

    constructor() {
        super();
        this.increase = this.increase.bind(this);
    }

    increase() {
        this.setState({
            value: this.state.value + 1
        })
    }

    decrease = () => {
        this.setState({
            value: this.state.value ? this.state.value - 1 : 0
        })
    }

    render() {
        return (<div>
            <div>{this.state.value}</div>
            <button onClick={this.increase}>Increase</button>
            <button onClick={this.decrease}>decrease</button>
        </div>)
    }
}
export default Counter;