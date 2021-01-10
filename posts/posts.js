const fs = require('fs')

let posts = []

const create = (title) => {
    try {
        load()
    } catch($e){} //si falla, la ejecucion sigue normalmente
    
    let post = {
        id: 1 + posts.length,
        title //omitimos el valor ya que es el mismo nombre
    }

    posts.push(post)
    save()
    return post

}

const read = (id) => {
    try {
        load()
    } catch($e){}

    let post = posts.find(post => post.id == id)
    return post
}

const update = (id, title) => {
    try {
        load()
    } catch($e){}

    let index = posts.findIndex(post => post.id == id)

    if(index !== -1){
        posts[index].title = title
        save()
        return posts[index]
    }
    return false
}

const destroy = (id) => {
    try {
        load()
    } catch($e){}

    let index = posts.findIndex(post => post.id == id)

    if(index !== -1){
        posts.splice(index, 1)
        save()
        return true
    }
    return false
}

const save = () => {
    let json = JSON.stringify(posts)
    fs.writeFile('posts/db.json', json, (error) =>{
        if(error) throw new Error('No se puede grabar el archivo')
    })
}

const load = () => {
    posts = require('./db.json')
}

module.exports = {
    create,
    read,
    update,
    delete: destroy
}