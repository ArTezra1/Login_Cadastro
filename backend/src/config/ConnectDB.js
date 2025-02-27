import mongoose from "mongoose"

async function ConnectDB() {
    try {
        mongoose.connect(process.env.DB_CONNECT)
        console.log("Conectado com o banco de dados.")
    } catch (error) {
        console.log("Erro no ConnecrtDB.js: ", error)
    }

    return mongoose.connection
}

export default ConnectDB