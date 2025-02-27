import clientes from "./ClientesRouter.js"

const routes = (app) =>{
    app.route("/").get((req, res)=>{
        res.status(200).send("Servidor rodando no localhost.")
    })

    app.use(clientes)
}

export default routes