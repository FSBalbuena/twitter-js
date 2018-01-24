const express=require('express')//creamos una instancia de express
const app=express()
const nj=require('nunjucks')
const twBank=require('./tweetBank.js')
const routes = require('./routes');
app.use('/', routes);
/*const morgan=require('morgan')
hacerlo luego con morgan*/

app.engine('html', nj.render);
app.set('view engine', 'html');
nj.configure('views',{ noCache: true });

app.use('static',express.static('public'));

app.use('/special',function(req,res,next){
	console.log('Legaste a special')
	next()
})


app.listen(3000)
