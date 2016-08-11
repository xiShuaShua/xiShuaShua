'use strict';
import Second from "./Second-page";

const App = React.createClass({

    getInitialState:function () {
        return{
            rooms:[]
        }
    },
    componentDidMount: function() {
        $.get('/selectRooms',(result)=>{
            this.setState({
                rooms: result,
            });
        })
    },
    render: function () {
        return <div>
            <Nav/>
            <List rooms={this.state.rooms}/>
        </div>;
    }
});

const Nav = React.createClass({
    render: function() {
        return <div className="row btn-info my-bg">
            <ul className="nav">
                <li className="col-xs-4"><span className="glyphicon glyphicon-circle-arrow-left">返回</span></li>
                <li className="col-xs-4 text-center">洗刷刷</li>
                <li className="col-xs-4 text-right"><span className="glyphicon glyphicon-heart">收藏</span></li>
            </ul>
        </div>
    }
});

const List = React.createClass({

    toggle:function (id) {
        console.log(id);
    },
    render: function() {
        const data = this.props.rooms;
        return <div className="row">
            <div className="row my-bg my-write my-bottom">
                <h4 className="col-xs-6 text-center">房间号</h4>
                <h4 className="col-xs-6 text-center">预约状态</h4>
            </div>
            {data.map(data=>{
               return  <div className="row my-top my-padding  my-write">
                    <div className="col-xs-6 text-center">{JSON.stringify(data._id)}</div>
                    <div className="col-xs-6 text-center">
                        <ReactRouter.Link to="/second">
                        <button className="btn btn-info" disabled={data.room.every(item=>{return item.state === 1})?"true":""}
                                onClick={this.toggle.bind(this,data._id) }>可预约</button>
                            </ReactRouter.Link>
                    </div>
                </div>

            })}
        </div>
    }
});


ReactDOM.render(
    <ReactRouter.Router >
        <ReactRouter.Route path="/" component = {App}>
            <ReactRouter.Route path="/second" component = {Second}/>
        </ReactRouter.Route>
    </ReactRouter.Router>
    , document.body);
