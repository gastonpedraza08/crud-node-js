const { argv } = require('./config/yargs') //las llaves dice que del objeto que importamos, solo necesitamos argv
const posts = require('./posts/posts')


let comando = argv._[0];

let post

switch(comando){
    case 'create':
        post = posts.create(argv.title)
        console.log("Create ", post)
        break;
    
    case 'read':
        post = posts.read(argv.id)
        console.log("Read ", post)
        break;
    
    case 'update':
        post = posts.update(argv.id, argv.title)
        console.log(post)
        break;

    case 'delete':
        post = posts.delete(argv.id)
        console.log(post)
        break;    

    default:
        console.log('No reconocido');
}


