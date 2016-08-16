import Login from "./components/Login";
import First from "./components/ReserveRoom";
import Second from "./components/ReserveTime";
import Best from "./components/RecommendReserveSuccess";
import Register from "./components/Register";
import App from "./components/App";
import Forget from "./components/Forget";
import Home from "./components/Home";
import Success from "./components/SelfReserveSuccess";
import Menu from "./components/PersonalCenter";
import BestSuccess from "./components/ReserveBest";

ReactDOM.render(
    <ReactRouter.Router>
        <ReactRouter.Route path="/" component={App}>
            <ReactRouter.IndexRoute component={Home}/>
            <ReactRouter.Route path = "/menu" component = {Menu}/>
            <ReactRouter.Route path="/first" component={First}/>
            <ReactRouter.Route path="/home" component={Home}/>
            <ReactRouter.Route path="/second" component={Second}/>
            <ReactRouter.Route path="/login" component={Login}/>
            <ReactRouter.Route path="/best" component={Best}/>
            <ReactRouter.Route path="/register" component={Register}/>
            <ReactRouter.Route path="/forget" component={Forget}/>
            <ReactRouter.Route path="/success" component={Success}/>
            <ReactRouter.Route path="/bestSuccess" component={BestSuccess}/>
        </ReactRouter.Route>

    </ReactRouter.Router>
    , document.getElementById("app"));

