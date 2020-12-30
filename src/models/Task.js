import {Schema, model} from 'mongoose'
import mongoosePaginate from 'mongoose-paginate-v2';
// Utilizamos solo los modulos Schema y model que seran los que utilizaremos en lugar de todos los modulos

const taskSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true // Trim elimina espacios innecesarios '   hello   ' ==> 'hello'
    },
    description: {
        type: String,
        trim: true
    },
    done: {
        type: Boolean,
        default: false
    },
}, {
    versionKey: false, // Mongoose generalmente agrega unos valores a los objetos con esta linea le
    // decimos que evite hacerlo
    timestamps: true //agrega propiedades createdAt y updatedAt
});

taskSchema.plugin(mongoosePaginate);
export default model('Task',taskSchema) 
//el model es para que cuando llamemos la funcion esta nos decuelva un
// objeto con metodos ya para guardar, editar o eliminar