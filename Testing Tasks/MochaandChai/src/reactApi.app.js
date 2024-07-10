const baseUrl = "http://localhost:8888/"

function get(name){
    return `${baseUrl}${name}`
}

function getById(name,id){

    return `${baseUrl}${name}/${id}`
}

function post(name){
     return `${baseUrl}${name}`
}
function deleteById(name,id){
    return `${baseUrl}${name}/${id}`
}

function  update(name,id){
    return `${baseUrl}${name}/${id}`
}
module.exports={get,getById,post,deleteById,update}