'use strict';

const Success = React.createClass({

    render: function () {

        const myDate = new Date();
        const hour = myDate.getHours();
        const minites = 60 - myDate.getMinutes();
        const time = this.props.time.split(':');
        const gapTime = time[0] - (hour + 1);

        return <div>
            <div className="row my-nav my-bg my-white-color">
                <ul className="nav">
                    <ReactRouter.Link to="/">
                        <li className="col-xs-4"><span className="glyphicon glyphicon-circle-arrow-left">返回</span></li>
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
            <div className="myimg">
            </div>
            <div className="text-center time">
                距您开始洗澡还有{gapTime}小时{minites}分钟
            </div>
        </div>
    }
});

export default Success