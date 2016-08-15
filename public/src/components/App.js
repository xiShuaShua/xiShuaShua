import React, {Component} from "react"
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            time: ''
        }
    }

    getId(id) {
        this.setState({
            id: id
        })
    }

    getTime(time) {
        this.setState({
            time: time
        })
    }

    render() {
        return (
            <div id={this.getId.bind(this)}>
                {this.props.children && React.cloneElement(this.props.children, {
                    id: this.state.id,
                    time: this.state.time,
                    onGetId: this.getId.bind(this),
                    onGetTime: this.getTime.bind(this)
                })}
            </div>
        )
    }
}

export default App;