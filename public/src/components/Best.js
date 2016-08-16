'use strict';
const Best = React.createClass({

    getInitialState: function () {
        return {
            canRecommends: [],
            recommendRooms: [],
            recommendTimes: [],
            myroom: []
        }
    },

    componentDidMount: function () {
        if (this.isMounted()) {
            $.get('/selectRooms', (result)=> {
                this.toggle(result);
                this.getId(this.state.recommendRooms[0]);
                this.getBestTime(this.state.recommendTimes[0]);
            })
        }
    },

    getId:function (id) {
        console.log(id);
        this.props.getId(id);
    },

    getBestTime:function (time) {
        console.log(time);
        this.props.getBestTime(time);
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
                    this.setState({canRecommends: this.state.canRecommends});
                    tag = 1;
                }
            });
        }

        this.state.canRecommends.map(canRecommend=> {
            this.state.recommendTimes.push(parseInt(canRecommend.time.split(":")[0]));
            this.setState({recommendTimes: this.state.recommendTimes});
            this.state.recommendRooms.push(canRecommend.id);
            this.setState({recommendRooms: this.state.recommendRooms})
        });

        for (let i = this.state.recommendTimes.length - 1; i > 0; i--) {
            if (this.state.recommendTimes[i] < this.state.recommendTimes[i - 1]) {
                this.state.recommendTimes[i - 1] = this.state.recommendTimes[i];
                this.setState({recommendTimes: this.state.recommendTimes});
                this.state.recommendRooms[i - 1] = this.state.recommendRooms[i];
                this.setState({recommendRooms: this.state.recommendRooms})
            }
        }

        rooms.map(element=> {
            if (element._id === this.state.recommendRooms[0]) {
                this.setState({myroom: element});
            }
        })
    },


    render: function () {

        return <div>
            <Header/>
            <Room room={this.state.recommendRooms[0]} />
            <Time time={this.state.recommendTimes[0]} />
            <Button isRecommend={this.state.recommendTimes[0]} element={this.state.myroom} index={this.state.recommendTimes[0] - 17}/>
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
            <div>
                <div className="row middle my-write hu-room">
                    <div className={this.props.room?"":"hidden"}>
                        <h4 className="col-md-6 text-center">房间号:{this.props.room}</h4>
                    </div>
                    <div className={this.props.room?"hidden":""}>
                        <h4 className="col-md-6 text-center">不好意思</h4>
                    </div>
                </div>
            </div>
        </div>
    }
});

const Time = React.createClass({
    render: function () {
        return <div>
            <div>
                <div className="row middle my-write hu-room">
                    <div className={this.props.time?"":"hidden"}>
                        <h4 className="col-md-6 text-center">时间:{this.props.time}：00-{this.props.time+1}:00</h4>
                    </div>
                    <div className={this.props.time?"hidden":""}>
                        <h4 className="col-md-6 text-center">房间已满，您可明日再试</h4>
                    </div>
                </div>
            </div>
        </div>
    }
});
const Button = React.createClass({
    update: function () {
        const element = this.props.element;
        const index = this.props.index;
        const item = element.room[index];

        $.post('/updateRoom', ({element, item, index}));
    },
    render: function () {
        return <div>
            <div className={this.props.isRecommend?"":"hidden"}>
                <ReactRouter.Link to="/bestSuccess">
                    <button className=" buttonOne btn  btn-lg  btn-info" onClick={this.update}>预约</button>
                </ReactRouter.Link>
                <ReactRouter.Link to="/first">
                    <button className="buttonTwo btn btn-lg ">自主预约</button>
                </ReactRouter.Link>
            </div>
        </div>
    }
});

export default Best;