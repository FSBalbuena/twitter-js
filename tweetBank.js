const _=require('lodash');

var data=[];

function add(name, content){
	data.push({name:name,content:content})

}
function list(){
	return _.clonedeep(data)
}
function find(propiedades){
	return _clonedeep(_.filter(data,propiedades))
}

module.exports={add,list,find}