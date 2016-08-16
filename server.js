import express from 'express';
const app = express();
import webpack from 'webpack';
import webpackConfig from './webpack.config';

var path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

const compiler = webpack(webpackConfig);
app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));
app.use(express.static('public'));

const selectData = require('./public/src/mongodb/rooms/selectRoom');
const updateData = require('./public/src/mongodb/rooms/updateRoom');
const insertUser = require('./public/src/mongodb/users/insertUser');
const updateUser = require('./public/src/mongodb/users/updateUser');
const selectUser = require('./public/src/mongodb/users/selectUser');

app.get('/rooms', selectData.findAll);
app.post('/rooms', updateData.update);

app.post('/insertUser', insertUser.insertUser);
app.post('/users', updateUser.update);
app.post('/selectUser',selectUser.findUser);

app.listen(8080, function () {
    console.log("server started at http://localhost:8080");
});


