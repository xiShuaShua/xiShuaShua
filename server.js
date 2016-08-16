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

const insertData = require('./public/src/mongodb/insertRoom');
const selectData = require('./public/src/mongodb/selectRoom');
const updateData = require('./public/src/mongodb/updateRoom');
const insertUser = require('./public/src/userINfoMongodb/insertUser');
const updateUser = require('./public/src/userINfoMongodb/updateUserInfo');
const selectUser = require('./public/src/userINfoMongodb/getFind');
const initData = require('./public/src/mongodb/initRoom');

app.get('/initData', initData.init);

app.post('/insertRoom', insertData.save);
app.get('/selectRooms', selectData.findAll);
app.post('/updateRoom', updateData.update);

app.get('/selectRooms', selectData.findAll);
app.post('/insertRoom', insertData.save);
app.post('/updateRoom', updateData.update);
app.post('/insertUser', insertUser.insertUser);
app.post('/updateUser', updateUser.update);
app.post('/selectUser',selectUser.findUser);



app.listen(8080, function () {
    console.log("server started at http://localhost:8080");
});
