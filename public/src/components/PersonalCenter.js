'use strict';

const PersonalCenter = React.createClass({
    render: function () {
        return <div>
            <Header />
            <FunctionList />
        </div>
    }
});

const Header = React.createClass({
    render: function () {
        return <div className="row btn-info my-bg">
            <ul className="nav">
                <ReactRouter.Link to="/home">
                    <li className="col-xs-4"><span className="glyphicon glyphicon-circle-arrow-left">返回</span></li>
                </ReactRouter.Link>
            </ul>
        </div>
    }
});
const FunctionList = React.createClass({
    render:function () {
        return<div className="mobile">
            <div className="menu">
                <ReactRouter.Link to="login">
                <h4><ul><a href="#"><i className="fa fa-check"></i><b>登陆</b></a></ul></h4>
                    </ReactRouter.Link>
                <ReactRouter.Link to="register">
                <h4><ul><a href="#"><i className="fa fa-inbox"></i><b>注册</b></a></ul></h4>
                    </ReactRouter.Link>
                <h4><ul><a href="#"><i className="fa fa-pencil"></i><b>充值</b></a></ul></h4>
                <h4><ul><a href="#"><i className="fa fa-cog"></i><b>个人装扮</b></a></ul></h4>
                <h4><ul><a href="#"><i className="fa fa-star"></i><b>注册会员</b></a></ul></h4>
                <ReactRouter.Link to="login">
                <h4><ul><a href="#"><i className="fa fa-power-off"></i><b>退出</b></a></ul></h4>
                    </ReactRouter.Link>
            </div>

        </div>

    }
});

export default PersonalCenter;
