const Forget = React.createClass({
    render: function () {
        return <div>
            <Title />
            <Bottom />
        </div>
    }
});

const Title = React.createClass({
    render: function () {
        return <div className="row btn-info my-bg">
            <ul className="nav">
                <ReactRouter.Link to="login">
                    <li className="col-xs-4"><span className="glyphicon glyphicon-circle-arrow-left">返回</span></li>
                </ReactRouter.Link>
                <li className="col-xs-4 text-center">忘记密码</li>
            </ul>
        </div>
    }
});

const Bottom = React.createClass({
    render: function () {
        return <div id="form-4" className="design">
            <center><h1 className="col-xs-offset-1 col-xs-10">找回密码</h1></center>
            <form>
                <p className="col-xs-offset-1 col-xs-10">
                    <input type="text" name="username" placeholder="用户名"/>
                </p>
                <p className="col-xs-offset-1 col-xs-10">
                    <input type="password" name='password' placeholder="帐号"/>
                </p>
                <p className="col-xs-offset-1 col-xs-10">
                    <input type="password" name='password-sure' placeholder="邮箱"/>
                </p>

            </form>
            <p className="col-xs-offset-3 col-xs-5">
                <center>
                    <button className="btn btn-primary" onClick={this.props.target}>发送验证码</button>
                </center>
            </p>
        </div>
    }
});
export default Forget;