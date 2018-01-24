const _=require('lodash');

var data=[];

function add(name, content){
	data.push({name:name,content:content})

}
function list(){
	return _.cloneDeep(data)
}
function find(propiedades){
	return _.cloneDeep(_.filter(data,propiedades))
}

module.exports={add,list,find}