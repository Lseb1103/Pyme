const { Schema, model } = require('mongoose');

const OrdenSchema = Schema({
   
    operacion: {
        type: String,
        required: true
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
  
    producto: {
        type: Schema.Types.ObjectId,
        ref: 'Producto',
        required: true
    },

    cantidad: {
        type: Number,
        required: true
    },
 //   productoNombre: {
//        type: String,
 //       required: true
   // },
    sucursal: {
        type: String,
        required: [true, 'El celular es obligatorio'],
    },
    cantidadFinalProducto:{
        type: Number,
        required: true
    }
    
});


OrdenSchema.methods.toJSON = function() {
    const { __v, estado, ...data  } = this.toObject();
    return data;
}


module.exports = model( 'Orden', OrdenSchema );
