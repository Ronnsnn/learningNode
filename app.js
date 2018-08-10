const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');

// console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break
    case 'listar':
        let listado = porHacer.listar();
        console.log('Listado:');
        for (let tarea of listado) {
            console.log('Nombre:', tarea.descripcion);
            console.log('Estado:', tarea.completado);
        }
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'eliminar':
        let eliminado = porHacer.eliminar(argv.descripcion);
        console.log(eliminado);
        break;
    default:
        console.log('Problemas');
}