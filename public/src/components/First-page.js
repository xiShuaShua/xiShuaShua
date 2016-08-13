'use strict';

const First = React.createClass({

    getInitialState:function () {
        return{
            rooms:[],
        }
    },
    getID:function (id) {
        this.props.onGetId(id);
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
            <List rooms={this.state.rooms}  getId = {this.getID}/>
        </div>;
    }
});

const Nav = React.createClass({
    render: function() {
        return <div className="row my-nav my-bg my-white-color">
            <ul className="nav">
                <ReactRouter.Link to="/">
                    <li className="col-xs-4"><span className="glyphicon glyphicon-circle-arrow-left">返回</span></li>
                </ReactRouter.Link>
                <li className="col-xs-4 text-center">洗刷刷</li>
                <li className="col-xs-4 text-right"><span className="glyphicon glyphicon-heart">收藏</span></li>
            </ul>
        </div>
    }
});

const List = React.createClass({
    getInitialState: function () {
        return {
            myDate :''
        }
    },
    componentDidMount:function () {
        this.setState({myDate: new Date().getHours()})
    },
    toggle:function (id) {
        this.props.getId(id);
    },
    render: function() {
        const data = this.props.rooms;
        return <div className="row">
            <div className="row my-bg my-write my-bottom my-height">
                <h4 className="col-xs-6 text-center">房间号</h4>
                <h4 className="col-xs-6 text-center">预约状态</h4>
            </div>
            {data.map((data,index)=>{
               return  <div className="row my-top my-padding  my-write" key={index}>
                    <div className="col-xs-6 text-center">{JSON.stringify(data._id)}</div>
                    <div className="col-xs-6 text-center">
                        <ReactRouter.Link to="/second">
                        <button className="btn btn-info" disabled={data.room.every(item=>{
                            const theTime = item.time.split(':');
                            return (item.state == 1 || parseInt(theTime[0]) <= this.state.myDate)})?"true":""}
                                onClick={this.toggle.bind(this,data._id) }>可预约</button>
                            </ReactRouter.Link>
                    </div>
                </div>

            })}
        </div>
    }
});

export default First;