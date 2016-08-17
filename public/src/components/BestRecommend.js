'use strict';
const Best = React.createClass({
    getInitialState: function () {
        return {
            recommends: [],
        }
    },

    componentDidMount: function () {
        if (this.isMounted()) {
            $.get('/rooms', (result)=> {
                this.toggle(result);
            })
        }
    },

    getTime:function (time) {
      this.props.onGetBestTime(time);
        console.log(time);
    },


    getId:function (id) {
        this.props.onGetBestId(id);
    },

    toggle: function (result) {
        const rooms = result;
        const myDate = new Date();
        const myTime = myDate.getHours();
        const emptyRooms = rooms.filter((room) => room.room.some((time) => time.state === '0'));

        const canRecommends = emptyRooms.map((room) => {
            return {
                id: room._id,
                time: room.room.find(tp => tp.state === '0' && parseInt(tp.time.split(":")[0]) > myTime).time,
            }

        });

        for (let type of canRecommends) {
            type.time = parseInt(type.time.split(':'));

        }

        for (let i = canRecommends.length - 1; i > 0; i--) {
            if (canRecommends[i].time < canRecommends[i - 1].time) {
                canRecommends[i - 1] = canRecommends[i];
            }
        }

        this.setState({recommends: canRecommends})
    },

    render: function () {
        return <div>
            <Header/>
            <Room room={this.state.recommends[0] != undefined ? this.state.recommends[0].id : "" }/>
            <Time time={this.state.recommends[0] != undefined ? this.state.recommends[0].time : ""}/>
            <Button isRecommend={this.state.recommends[0] != undefined ? this.state.recommends[0].id : ""}
                    onGetId ={this.getId} id={this.state.recommends[0] && this.state.recommends[0].id}
                    onGetTime={this.getTime} time={this.state.recommends[0] && this.state.recommends[0].time}/>
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
                    <div className={this.props.room ? "" : "hidden"}>
                        <h4 className="col-md-6 text-center">房间号:{this.props.room}</h4>
                    </div>
                    <div className={this.props.room ? "hidden" : ""}>
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
            <div className="row middle my-write">
                <div className={this.props.time ? "" : "hidden"}>
                    <h4 className="col-md-6 text-center">时间:{this.props.time}:00-{this.props.time + 1}:00</h4>
                </div>
                <div className={this.props.time ? "hidden" : ""}>
                    <h4 className="col-md-6 text-center">房间已满，您可明日再试</h4>
                </div>
            </div>
        </div>
    }
});

const Button = React.createClass({
    toggle:function () {
      const id = this.props.id;
        const time = this.props.time;
        this.props.onGetId(id);
        this.props.onGetTime(time);
    },

    render: function () {
        return <div className="col-md-6 ">
            <center>
                <div className={this.props.isRecommend ? "" : "hidden"}>
                    <ReactRouter.Link to="/bestSuccess">
                        <button className="btn hu-button btn-lg  btn-info" onClick={this.toggle}>预约</button>
                    </ReactRouter.Link>
                </div>
            </center>
        </div>
    }
});

export default Best;
