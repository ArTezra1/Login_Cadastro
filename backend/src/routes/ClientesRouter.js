import express from "express"
import ClientesController from "../controllers/ClientesController.js"

const routes = express.Router()

routes.get("/clientes", (req, res, next) =>{
    ClientesController.PegarRegistro(req, res, next)
})

routes.get("/clientes/:id", (req, res, next) =>{
    ClientesController.PegarRegistroPorId(req, res, next)
})

routes.post("/clientes", (req, res, next) =>{
    ClientesController.CriarCliente(req, res, next)
})

routes.post("/clientes/login", (req, res, next) =>{
    ClientesController.Login(req, res, next)
})

routes.put("/clientes/:id", (req, res, next) =>{
    ClientesController.AtualizarRegistro(req, res, next)
})

routes.delete("/clientes/:id", (req, res, next) =>{
    ClientesController.DeletarRegistro(req, res, next)
})

export default routes