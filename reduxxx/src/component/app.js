import React, {Component} from "react";

class App extends Component {
    render() {
        return <div>
            <span>{this.props.fuga}</span>
            <button onClick={()=> this.props.handleClick()}>増加</button>
        </div>
    }
}

export default App;