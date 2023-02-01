const { Schema, model } = require('mongoose');

const ReporteSchema = Schema({
    nombre: {
        type: String,
       // required: [true, 'El nombre es obligatorio'],
        unique: true,
        default: true,
    },
});


module.exports = model( 'Reporte', ReporteSchema );
