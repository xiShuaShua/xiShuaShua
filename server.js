import express from 'express';
const app = express();
import webpack from 'webpack';
import webpackConfig from './webpack.config';

var path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
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

app.post('/insertRoom',insertData.save);
app.get('/selectRooms',selectData.findAll);
app.post('/updateRoom', updateData.update);

app.post('/insertUser', insertUser.insertUser);

app.listen(8080, function() {
  console.log("server started at http://localhost:8080");
});


