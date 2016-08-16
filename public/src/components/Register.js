const SighUp = React.createClass({
    getInitialState: function () {
        return {
            user: []
        }
    },

    target: function () {
        let username = $("input[name=username]").val();
        let password = $("input[name=password]").val();
        let surepassword = $("input[name=password-sure]").val();
        if(username === ''){
            alert("用户名不能为空，请输入用户名")
        }
        else if(password===''){
            alert("密码不能为空，请输入密码")
        }
        else  if(surepassword === ''){
            alert("密码不能为空，请输入密码")
        }
        else if(surepassword === password) {
            $.post('/selectUser',{"name":username},(data)=>{
                if(data.length === 0){
                    $.post('/insertUser', {name: username, password},(data)=>{
                        alert("注册成功")
                    });
                }
                else{
                    alert('该用户已存在，请重新输入')
                }
            });
        }
        else {
            alert("两次输入密码不相同，请重新输入");
        }
    },

    render: function () {
        return <div>
            <Title/>
            <Top/>
            <Bottom target={this.target}/>
        </div>
    }
});

const Title = React.createClass({
    render: function () {
        return <div className="row my-nav my-bg my-white-color">
            <ul className="nav">
                <ReactRouter.Link to="/login">
                <li className="col-xs-4"><span className="glyphicon glyphicon-circle-arrow-left">返回</span></li>
                    </ReactRouter.Link>
               <li className="col-xs-4 text-center">注册</li>
            </ul>
        </div>
    }
});

const Top = React.createClass({
    render: function () {
        return <div className="image">
            <img src="src/img/images6.jpg"/>
        </div>
    }
});

const Bottom = React.createClass({
    render: function () {
        return <div id="form-4" className="design">
            <form>
                <p className="col-xs-offset-1 col-xs-10">
                    <input type="text" name="username" placeholder="用户名"/>
                </p>
                <p className="col-xs-offset-1 col-xs-10">
                    <input type="password" name='password' placeholder="密码"/>
                </p>
                <p className="col-xs-offset-1 col-xs-10">
                    <input type="password" name='password-sure' placeholder="确认密码"/>
                </p>
            </form>
            <p className="text-center">
                <button className="btn btn-primary" onClick={this.props.target}>注册</button>
            </p>
        </div>
    }
});
export default SighUp;