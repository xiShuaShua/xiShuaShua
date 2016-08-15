'use strict';
const Best = React.createClass({
    getInitialState: function () {
        return {
            canRecommends: [],
            recommendRooms: [],
            recommendTimes: [],
        }
    },

    componentDidMount: function () {
        if (this.isMounted()) {
            $.get('/selectRooms', (result)=> {
                this.toggle(result);
        })
        }
    },

    toggle: function (result) {
        const rooms = result;
        const myDate = new Date();
        const myTime = myDate.getHours();

        for (let i = 0; i < rooms.length; i++) {
            let tag = 0;
            rooms[i].room.map((item, index)=> {
                if (item.state === "0" && tag === 0 && myTime < parseInt(item.time.split(":")[0])) {
                this.state.canRecommends.push({id: rooms[i]._id, time: item.time});
                this.setState({canRecommends: this.state.canRecommends})
                tag = 1;
            }
        });
        }

        const canRecommends = this.state.canRecommends;
        this.state.canRecommends.map(canRecommend=> {
            this.state.recommendTimes.push(parseInt(canRecommend.time.split(":")[0]));
        this.setState({recommendTimes: this.state.recommendTimes});
        this.state.recommendRooms.push(canRecommend.id);
        this.setState({recommendRooms: this.state.recommendRooms})
    });

        for (let i = this.state.recommendTimes.length - 1; i > 0; i--) {
            if (this.state.recommendTimes[i] < this.state.recommendTimes[i - 1]) {
                this.state.recommendTimes[i - 1] = this.state.recommendTimes[i];
                this.state.recommendRooms[i - 1] = this.state.recommendRooms[i];
            }
        }
    },

    render: function () {

        return <div>
        <Header/>
        <Room room={this.state.recommendRooms[0] && this.state.recommendRooms[0]}/>
        <Time time={this.state.recommendTimes[0]}/>
        <Button/>
        </div>
    }
});
const Header = React.createClass({
    render: function () {
        return <div className="row my-nav my-bg my-white-color">
            <ul className="nav">
            <ReactRouter.Link to="/">
            <li className="col-xs-4"><span className="glyphicon glyphicon-circle-arrow-left">返回</span></li>
            </ReactRouter.Link>
            <li className="col-xs-4 text-center">最佳推荐</li>
            <li className="col-xs-4 text-right"><span className="glyphicon glyphicon-heart">收藏</span></li>
            </ul>
            </div>
    }
});
const Room = React.createClass({
    render: function () {
        return <div>
        <div className={"this.props.room" ? "" : "hidden"}>
            <div className="row middle my-write hu-room">
            <h4 className="col-md-6 text-center">房间号:{this.props.room}</h4>
        </div>
        </div>
        </div>
    }
});

const Time = React.createClass({
    render: function () {
        return <div>
        <div className={"this.props.room" ? "" : "hidden"}>
            <div className="row middle my-write">
            <h4 className="col-md-6 text-center">时间:{this.props.time}:00-{this.props.time + 1}:00</h4>
        </div>
        </div>
        </div>
    }
});
const Button = React.createClass({
    render: function () {
        return <div className="col-md-6 ">
            <center>
            <ReactRouter.Link to="/success">
            <button className="btn hu-button btn-lg  btn-info">预约</button>
            </ReactRouter.Link>
            </center>
            </div>
    }
});

export default Best;