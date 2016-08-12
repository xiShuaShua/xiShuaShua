import Login from "./components/Login";
import First from "./components/First-page";
import Second from "./components/Second-page";
import Best from "./components/Best";
import Register from "./components/Register";
import App from "./components/App";

ReactDOM.render(
    <ReactRouter.Router>
        <ReactRouter.Route path="/" component = {App}>
            <ReactRouter.IndexRoute component = {Login}/>
            <ReactRouter.Route path="/first" component = {First}/>
            <ReactRouter.Route path="/second" component = {Second}/>
            <ReactRouter.Route path="/login" component = {Login}/>
            <ReactRouter.Route path="/best" component = {Best}/>
            <ReactRouter.Route path="/register" component = {Register}/>
        </ReactRouter.Route>

    </ReactRouter.Router>
,document.getElementById("app"));

