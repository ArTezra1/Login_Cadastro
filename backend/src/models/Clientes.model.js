import mongoose from "mongoose";

const ClienteSchema = new mongoose.Schema({
    nome:{
        type: String,
        required: [true, "Por favor insira o seu nome."]
    },
    email:{
        type: String,
        required: [true, "Por favor insira o seu email."],
        unique: [true, "O email já está sendo usado."]
    },
    senha:{
        type: String,
        required: [true, "Por favor insira sua senha."],
        min: [6, "Sua senha deve contar no mínimo 6 caractéres."]
    },
    role:{
        type: String,
        enum: ["cliente", "admin"],
        default: "cliente"
    }
},{

})

const ClientesModel = mongoose.model("Clientes", ClienteSchema)

export default ClientesModel