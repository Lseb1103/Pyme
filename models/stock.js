const { Schema, model } = require('mongoose');

const StockSchema = Schema({
    // _id: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Producto',
        
    // },
    ProductoID: {
        type: Schema.Types.ObjectId,
        ref: 'Producto'
    },
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        unique: true
    },
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
    precio: {
        type: Number,
        default: 0
    },
    categoria: {
        type: Schema.Types.ObjectId,
        ref: 'Categoria',
        required: true
    },
    cantidad: {
        type: Number,
        required: true
    },
    descripcion: { type: String },
    disponible: { type: Boolean, defult: true },
    img: { type: String },

},{ timestamps: true});


StockSchema.methods.toJSON = function() {
    const { __v, estado, ...data  } = this.toObject();
    return data;
}


module.exports = model( 'Stock', StockSchema );
