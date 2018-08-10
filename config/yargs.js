const
    descripcion = {
        alias: 'd',
        demand: true,
    };
const completado = {
    alias: 'c',
    default: true,

};
// console.log(Object.assign(desc, compl))
const argv = require('yargs')
    .command('crear', 'Crear una tarea', { descripcion })
    .command('actualizar', 'Actualizar una tarea', { descripcion, completado })
    .command('eliminar', 'Eliminar una tarea', { descripcion })
    .command('listar', 'Listar todas las tareas', {})
    .help()
    .argv;

module.exports = {
    argv,
}