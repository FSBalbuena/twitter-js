const express = require('express') //creamos una instancia de express
const app = express()
const nj = require('nunjucks')
const twBank = require('./tweetBank.js')
const routes = require('./routes');
const bodyParser = require('body-parser');

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
	extended: false
}))
app.use('/', routes);
/*const morgan=require('morgan')
hacerlo luego con morgan*/

app.engine('html', nj.render);
app.set('view engine', 'html');
nj.configure('views', {
	noCache: true
});

app.use('static', express.static('public'));

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
	extended: false
}))

app.listen(3000)