const { Schema, model } = require('mongoose');

const OrdenSchema = Schema({
   
    estado: {
        type: Boolean,
        default: true,
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
    }
    
});


OrdenSchema.methods.toJSON = function() {
    const { __v, estado, ...data  } = this.toObject();
    return data;
}


module.exports = model( 'Orden', OrdenSchema );
