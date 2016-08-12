import React,{Component} from "react"
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            id:0
        }
    }

    getId (id){
        this.setState({
            id:id
        })
    }

    render() {
        return (
            <div id = {this.getId.bind(this)}>
                {this.props.children && React.cloneElement(this.props.children,{
                    id :this.state.id,
                    onGetId:this.getId.bind(this)
                })}
            </div>
        )
    }
}

export default App;