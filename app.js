const express=require('express')
const app=express()
const nj=require('nunjucks')//creamos una instancia de express
/*const morgan=require('morgan')
hacerlo luego con morgan*/
app.listen(3000)
app.engine('html', nj.render);
app.set('view engine', 'html');
nj.configure('views',{ noCache: true });
app.use('/',function(req,res,next){
	//podemos usar chalk
	console.log(req)
	next()
})

app.use('/special',function(req,res,next){
	console.log('Legaste a special')
	next()
})

app.get('/',function(req,res,next){
	var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
	res.render('index',{title:'hola',people:people})
})

