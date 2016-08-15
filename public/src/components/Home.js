const Home = React.createClass({
    render: function () {
        return <div className="row my-nav my-bg my-white-color">
            <ul className="nav">
                <li className="col-xs-4"><span className="glyphicon glyphicon-user"></span></li>
                <li className="col-xs-4 text-center">洗刷刷</li>
                <ReactRouter.Link to = "/login">
                <li className="col-xs-4 text-right"><span className="glyphicon glyphicon-heart">收藏</span></li>
                </ReactRouter.Link>
            </ul>
            <Top />
            <Body />
        </div>

    }
});

const Top = React.createClass({
    render: function () {
        return <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                <li data-target="#carousel-example-generic" data-slide-to="3"></li>
                <li data-target="#carousel-example-generic" data-slide-to="4"></li>

            </ol>

            <div className="carousel-inner" role="listbox">
                <div className="item active img-rounded">
                    <div className="my-yellow my-img"><img src="src/img/1.png" alt="..."/></div>
                </div>
                <div className="item img-rounded">
                    <div className="my-green my-img"><img src="src/img/2.png"/></div>
                </div>
                <div className="item img-rounded">
                    <div className="my-red my-img"><img src="src/img/3.png" alt="..."/></div>
                </div>
                <div className="item img-rounded">
                    <div className="my-pink my-img"><img src="src/img/4.png" alt="..."/></div>
                </div>
                <div className="item img-rounded">
                    <div className="my-blue-green my-img"><img src="src/img/5.png" alt="..."/></div>
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

const Body = React.createClass({
    render: function () {
        return <div className="row text-center">
            <div className="row">
                <ReactRouter.Link to="/first">
                    <div className="col-xs-6 my-table">
                        <div className="my-server my-blue center-block my-left">
                            <span className="glyphicon glyphicon-tree-deciduous my-white-color"> </span>
                        </div>
                        <div className="my-text-left">自助洗浴</div>
                    </div>
                </ReactRouter.Link>
                <ReactRouter.Link to="/best">
                    <div className="col-xs-6 my-table">
                        <div className="my-server my-green center-block my-right">
                            <span className="glyphicon glyphicon-transfer my-white-color"> </span>
                        </div>
                        <div className="my-text-right">最佳推荐</div>
                    </div>
                </ReactRouter.Link>
            </div>
            <div className="row">
                <div className="col-xs-6 my-table">
                    <div className="my-server my-red center-block my-left">
                        <div className="glyphicon glyphicon-earphone my-white-color"></div>
                    </div>
                    <div className="my-text-left">客服热线</div>
                </div>
                <div className="col-xs-6 my-table">
                    <div className="my-server my-purple center-block my-right">
                        <span className="glyphicon glyphicon-phone-alt glyphicon glyphicon-tower my-white-color"> </span>
                    </div>
                    <div className="my-text-right">众包服务</div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-6 my-table">
                    <div className="my-server my-blue-green center-block my-left">
                        <span className="glyphicon glyphicon-gift my-white-color"> </span>
                    </div>
                    <div className="my-text-left">洗澡套餐</div>
                </div>
                <div className="col-xs-6 my-table">
                    <div className="my-server my-gray center-block my-right">
                        <span className="glyphicon glyphicon-option-horizontal my-white-color"> </span>
                    </div>
                    <div className="my-text-right">更多服务</div>
                </div>
            </div>
        </div>
    }
});

export default Home