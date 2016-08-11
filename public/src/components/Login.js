const Login = React.createClass({
    render: function () {
        return <div>
            <Title/>
            <div>
                <Body/>
            </div>
        </div>
    }
});

const Title = React.createClass({
    render: function () {
        return <div className="row btn-info my-bg">
            <ul className="nav">
                <li className="col-xs-4"><span className="glyphicon glyphicon-circle-arrow-left">返回</span></li>
                <li className="col-xs-4 text-center">登录</li>
                <li className="col-xs-4 text-right">注册</li>
            </ul>
        </div>
    }
});

const Body = React.createClass({
    render: function () {
        return <div>
            <Top/>
            <Bottom/>
        </div>
    }
});

const Top = React.createClass({
    render: function () {
        return <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carousel-example-generic" data-slide-to="0" className="active"> </li>
                <li data-target="#carousel-example-generic" data-slide-to="1"> </li>
                <li data-target="#carousel-example-generic" data-slide-to="2"> </li>
                <li data-target="#carousel-example-generic" data-slide-to="3"> </li>
                <li data-target="#carousel-example-generic" data-slide-to="4"> </li>

            </ol>

            <div className="carousel-inner" role="listbox">
                <div className="item active img-rounded">
                    <img src="../img/2.jpg" alt="..."/>
                </div>
                <div className="item img-rounded">
                    <img src="../img/10.png"/>
                </div>
                <div className="item img-rounded">
                    <img src="../img/3.jpg" alt="..."/>
                </div>
                <div className="item img-rounded">
                    <img src="../img/6.png" alt="..."/>
                </div>
                <div className="item img-rounded">
                    <img src="../img/11.png" alt="..."/>
                </div>
            </div>

            <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"> </span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"> </span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    }
});

const Bottom = React.createClass({
    render: function () {
        return <div className="content design">
            <div className="col-xs-offset-2">
                <input type="text" placeholder="用户名" required="" id="username"/>
            </div>
            <div className="col-xs-offset-2">
                <input type="password" placeholder="密码" required="" id="password"/>
            </div>
            <div className="col-xs-offset-3">
                <input type="submit" value="登录"/>
            </div>
            <br/>
            <br/>
            <div className="design">
                <a href="#">忘记密码</a>
            </div>
        </div>
    }
});
ReactDOM.render(
    <Login/>
    , document.body);