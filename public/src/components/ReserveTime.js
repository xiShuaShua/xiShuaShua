'use strict';

const ReserveTime = React.createClass({

    getInitialState: function () {
        return {
            room: [],
            id: this.props.id,
        }
    },

    getTime: function (time) {
        this.props.onGetTime(time);
    },

    componentDidMount: function () {
        $.get('/rooms', (result)=> {

            this.setState({room: result});
        })
    },

    render: function () {
        return <div>
            <Header id={this.state.id}/>
            <TimeList elements={this.state.room} onGetTime={this.getTime} id={this.state.id}/>
        </div>
    }
});

const Header = React.createClass({
    render: function () {
        return <div className="row my-nav my-bg my-white-color">
            <ul className="nav">
                <ReactRouter.Link to="/first">
                    <li className="col-xs-4"><span className="glyphicon glyphicon-circle-arrow-left">返回</span></li>
                </ReactRouter.Link>
                <li className="col-xs-4 text-center">{this.props.id}号房</li>
                <li className="col-xs-4 text-right"><span className="glyphicon glyphicon-heart">收藏</span></li>
            </ul>
        </div>
    }
});

const TimeList = React.createClass({

    update: function (element, item) {
        this.props.onGetTime(item.time);
        const index = element.room.indexOf(item);
        $.post('/rooms', ({element, item, index}));
    },

    render: function () {
        const myDate = new Date();
        const myTime = myDate.getHours();

        return <div>
            <div className="row middle my-write">
                <h4 className="col-xs-6 text-center">时间段</h4>
                <h4 className="col-xs-6 text-center">状态</h4>
            </div>
            {this.props.elements.map(element => {
                if (element._id === this.props.id) {
                    return element.room.map(item => {
                        const theTime = item.time.split(':');

                        if (item.state === "0" && parseInt(theTime[0]) > (myTime)) {

                            return <div className="row list">
                                <ul className="col-xs-6 text-center">{item.time}</ul>
                                <div className="col-xs-6 text-center ">
                                    <ReactRouter.Link to='/selfSuccess'>
                                        <button onClick={this.update.bind(this, element, item)}
                                                className=" btn btn-info">预约
                                        </button>
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

export default ReserveTime;