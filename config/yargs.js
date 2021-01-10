const id = {
    demand: true,
    desc: 'Id del post'
}
const title = {
    demand:true,
    alias: 't',
    desc: 'Titulo del Post'
}

const argv = require('yargs')
    .command('create', 'Crea un nuevo post', {
        title
    })
    .command('read', 'Lee un post', {
        id
    })
    .command('update', 'Actualiza un post', {
        id, //si es un solo elemento, la clave y el valor tienen el mismo nombre
        title

    })
    .command('delete', 'Borra un post', {
        id
    })
    .argv

module.exports = {
    argv
}