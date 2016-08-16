'use strict';
const Login = React.createClass({
    getInitialState:function(){
        return {
            user:[],
            isSame:false
        }
    },
    jude:function () {
        let username = $("input[name=username]").val();
        let password = $("input[name=password]").val();

        $.post('/selectUser',{"name":username},(data)=>{
            if(username === ''){
                alert("用户名不能为空，请输入用户名")
            }
            else if(password === ''){
                alert("密码不能为空，请输入密码")
            }
            else if(data.length === 0){
                alert("该用户不存在")
                $("input[name=username]").val('');
                $("input[name=password]").val('');
            }
            else if(data[0].password != password){
                alert("密码不正确")
                $("input[name=password]").val('');
            }
            else{
                alert("登录成功")
                this.setState({isSame:!this.state.isSame})
            }
        })
    },

    render: function () {
        return <div>
            <Title/>
            <div>
                <Body toggle={this.jude} isSame={this.state.isSame}/>
            </div>
        </div>
    }
});

const Title = React.createClass({
    render: function () {
        return <div className="row my-nav my-bg my-white-color">
            <ul className="nav">
                <ReactRouter.Link to="/home">
                    <li className="col-xs-4"><span className="glyphicon glyphicon-circle-arrow-left">返回</span></li>
                </ReactRouter.Link>
                <li className="col-xs-4 text-center" >登录</li>
                <ReactRouter.Link to="register">
                <li className="col-xs-4 text-right" >注册</li>
                    </ReactRouter.Link>
            </ul>
        </div>
    }
});

const Body = React.createClass({
    render: function () {
        return <div>
            <Top/>
            <Bottom toggle={this.props.toggle} isSame={this.props.isSame}/>
        </div>
    }
});

const Top = React.createClass({
    render: function () {
        return <div className="image">
            <img src="src/img/7.jpg"/>
        </div>
    }
});

const Bottom = React.createClass({
    render: function () {
        return <div className="design" id="content">
            <div className="col-xs-offset-2">
                <input type="text" placeholder="用户名" name="username" id="username" autoFocus="true"/>
            </div>
            <div className="col-xs-offset-2">
                <input type="password" placeholder="密码" name="password" id="password"/>
            </div>
            <div className="col-xs-offset-3">
                <ReactRouter.Link to={this.props.isSame ? 'First':'Login'}>
                <input type="submit" value="登录" onClick={this.props.toggle}/>
                    </ReactRouter.Link>
            </div>
            <br/>
            <br/>
            <div className="design">
                <ReactRouter.Link to="forget">
                <a href="#">忘记密码</a>
                    </ReactRouter.Link>
            </div>
        </div>
    }
});
export default Login;
