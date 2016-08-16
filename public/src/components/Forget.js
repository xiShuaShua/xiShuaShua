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
    point:function () {
        const userName = $("input[name=username]").val();
        const prePassword = $("input[name=password]").val();
        const newPassword = $("input[name=password-sure]").val();

        if(prePassword === newPassword){
            $.post('/updateUser',{name:userName,password:newPassword},function (result) {
            });
            alert("恭喜！密码修改成功！");
        }else{
            alert("两次输入不一致，请重新输入！");
            $("input[name=password-sure]").val('');
        }
    },

    render: function () {
        return <div id="form-4" className="design">
            <center><h1 className="col-xs-offset-1 col-xs-10">找回密码</h1></center>
            <form>
                <p className="col-xs-offset-1 col-xs-10">
                    <input type="text" name="username" placeholder="用户名"/>
                </p>
                <p className="col-xs-offset-1 col-xs-10">
                    <input type="password" name='password' placeholder="新密码"/>
                </p>
                <p className="col-xs-offset-1 col-xs-10">
                    <input type="password" name='password-sure' placeholder="确认新密码"/>
                </p>
            </form>
            <p className="col-xs-offset-3 col-xs-5">
                <center>
                    <button className="btn btn-primary" onClick={this.point}>确认修改</button>
                </center>
            </p>
        </div>
    }
});
export default Forget;