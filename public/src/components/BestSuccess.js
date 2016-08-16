'use strict';

const BestSuccess = React.createClass({

    render: function () {
        const myDate = new Date();
        const hour = myDate.getHours();
        const minutes = myDate.getMinutes();
        const time = this.props.bestTime;
        const gapTime = (minutes === 0) ? time[0] - hour : time[0] - (hour + 1);

        return <div>
            <div className="row my-nav my-bg my-white-color">
                <ul className="nav">
                    <ReactRouter.Link to="/">
                        <li className="col-xs-4"><span className="glyphicon glyphicon-circle-arrow-left">返回</span>
                        </li>
                    </ReactRouter.Link>
                    <li className="col-xs-4 text-center">洗刷刷</li>
                    <li className="col-xs-4 text-right"><span className="glyphicon glyphicon-heart">收藏</span></li>
                </ul>
            </div>
            <div className="success row">
                <div className=" send col-xs-4 text-right glyphicon glyphicon-tint"></div>
                <h3 className="col-xs-4 text-center">预约成功</h3>
                <div className=" send col-xs-4 text-left glyphicon glyphicon-tint"></div>
            </div>
            <div>
                <div className="text-center time">
                    <span>您预定的房间号为{this.props.id}号房</span>
                </div>
                <div className="text-center time">
                    <span>距您开始洗澡还有{gapTime}小时{60 - minutes}分钟</span>
                </div>
            </div>
            <div className="text-center pay">
                <button className=" btn btn-info btn-lg">去付款</button>
            </div>
        </div>
    }
});

export default BestSuccess
