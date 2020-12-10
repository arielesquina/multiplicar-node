const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`El archivo  tabla-${argv.base}-al-${argv.limite}.txt ha sido creado`))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
        break;
}

//requireds
//const fs = require('fs');
//const fs = require('express'); // no son nativos de node
//const fs = require('./fs'); //Propios

//let base = 7;
//console.log(process.argv);
//let argv2 = process.argv;

//let parametro = argv[2];
//let base = parametro.split('=')
//let base = parametro.split('=')[1]

//console.log('Limite', argv.limite);
//console.log(argv2);