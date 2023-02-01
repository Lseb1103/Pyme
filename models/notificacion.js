const { Schema, model } = require('mongoose');

const NotiSchema = Schema({
    
    notificacion: {
        type: String,
        required: [true, 'La notificacion es requerida'],
        //unique: true,
    },
    estado: {
        type: Boolean,
        default: true,
        required: true
    },
    usuario: {
       type: Schema.Types.ObjectId,
       //type: String,
       ref: 'Usuario',
       required: true
     },
     
     rol: {
        type: String,
       // type: String,
        ref: 'Usuario',
        //required: true
      },
      
     para: {
        type: String,
        default: "",
        required: true
    },
     
});


module.exports = model('Notificacion', NotiSchema);
