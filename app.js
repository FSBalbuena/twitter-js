const express=require('express')
const app=express()
const nj=require('nunjucks')//creamos una instancia de express
/*const morgan=require('morgan')
hacerlo luego con morgan*/
app.engine('html', nj.render);
app.set('view engine', 'html');
nj.configure('views');
app.use('/',function(req,res,next){
	//podemos usar chalk
	console.log(req)
	next()
})

app.use('/special',function(req,res,next){
	console.log('Legaste a special')
	next()
})

app.get('/',)

