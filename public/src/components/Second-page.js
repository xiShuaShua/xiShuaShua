'use strict';
const App = React.createClass({

    getInitialState: function () {
        return {
            room: []
        }
    },

    componentDidMount: function () {
        $.get('/selectRooms', (result)=> {

            this.setState({room: result});
        })
    },

    render: function () {
        return <div>
            <Header/>
            <Middle/>
            <List elements={this.state.room}/>
        </div>
    }
});

const Header = React.createClass({
    render: function () {
        return <div className="row btn-info my-bg">
            <ul className="nav">
                <li className="col-xs-4"><span className="glyphicon glyphicon-circle-arrow-left">返回</span></li>
                <li className="col-xs-4 text-center">2号房</li>
                <li className="col-xs-4 text-right"><span className="glyphicon glyphicon-heart">收藏</span></li>
            </ul>
        </div>
    }
});

const Middle = React.createClass({
    render: function () {
        return <div className="row middle my-write">
            <h4 className="col-xs-6 text-center">时间段</h4>
            <h4 className="col-xs-6 text-center">状态</h4>
        </div>

    }
});

const List = React.createClass({

    render: function () {

        const myDate = new Date();
        const myTime = myDate.getHours();

        return <div>
            {this.props.elements.map(element => {
                if (element._id === 4) {
                    return element.room.map(item => {
                        const theTime = item.time.split(':');

                        if (item.state === 0 && parseInt(theTime[0]) > myTime) {

                            return <div className="row list">
                                <ul className="col-xs-6 text-center">{item.time}</ul>
                                <div className="col-xs-6 text-center ">
                                    <ReactRouter.Link to='/second'>
                                        <button className=" btn btn-info">预约</button>
                                    </ReactRouter.Link>
                                </div>
                            </div>
                        }
                    })
                }

            })}

        </div>
    }
});

ReactDOM.render(
    <App/>
    , document.body);





