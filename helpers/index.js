

const dbValidators = require('./db-validators');
const generarJWT   = require('./generar-jwt');
 const generarPdf  = require('./pdj');
const subirArchivo = require('./subir-archivo');
//const generarPDF   = require('./generar-pdf');

module.exports = {
    ...dbValidators,
    ...generarJWT,
    ...subirArchivo,
    ...generarPdf,
}