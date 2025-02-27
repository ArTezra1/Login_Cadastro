import express from "express";
import dotenv from "dotenv"
import routes from "./src/routes/index.js";
import ConnectDB from "./src/config/ConnectDB.js";

dotenv.config()

const conexao = await ConnectDB()

const app = express()
app.use(express.json())

routes(app)

conexao.on("error", (erro) =>{
    console.log("Erro no app.js:", erro)
})

conexao.once("once", () =>{
    console.log("Servidor iniciado.")
})

app.listen(process.env.PORT, () =>{
    console.log("Servidor rodando na porta:", process.env.PORT)
})