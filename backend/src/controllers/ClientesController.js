import ClientesModel from "../models/Clientes.model.js";
import DefaultServices from "../services/DefaultServices.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

class ClientesController extends DefaultServices{
    constructor(){
        super(ClientesModel)
    }

    async CriarCliente(req, res, next){
        const { senha, ...dadosCliente } = req.body

        try {
            if(!senha){
                return res.status(400).json({
                    message: "A senha é obrigatória."
                })
            }
            
            const salt = await bcrypt.genSalt(10)

            const senhaHash = await bcrypt.hash(senha, salt)

            const cliente = await ClientesModel.create({
                ...dadosCliente, senha: senhaHash
            })

            return res.status(201).json(cliente)

        } catch (error) {
            console.log("Erro ao criar cliente", error)
        }
    }

    async Login(req, res, next){
        const { email, senha } = req.body

        try {    
            if(email && senha){
                const cliente = await ClientesModel.findOne({
                    email: email
                })

                if(!cliente){
                    return res.status(401).json({
                        message: "Email inválido."
                    })
                }

                const senhaValida = bcrypt.compare(senha, cliente.senha)

                if(!senhaValida){
                    return res.status(401).json({
                        message: "Senha inválida."
                    })
                }

                const token = jwt.sign({
                    id: cliente._id, role: cliente.role
                }, process.env.TOKEN_SECRET, {
                    expiresIn: 300
                })

                return res.json({
                    token,
                    usuario:{
                        id: cliente._id,
                        nome: cliente.nome,
                        role: cliente.role
                    }
                })
            } else{
                return res.status(422).json({
                    message: "Por favor preencha os campos corretamente."
                })
            }

        } catch (error) {
            console.log("Erro no login.", error)
        }
    }
}

export default new ClientesController()