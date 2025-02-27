import FiltrarBusca from "../middlewares/Busca.js"

class DefaultServices{
    constructor(model){
        this.model = model
    }

    async PegarRegistro(req, res, next){
        try {
            const registros = await this.model.find({})
            
            if(!registros){
                return res.status(200).json({
                    message: "Sem registros para esse modelo."
                })
            }
            
            return res.status(200).json(registros)

        } catch (error) {
            console.log("erro: ", error)
        }
    }

    async PegarRegistroPorId(req, res, next){
        try {
            const registro = await this.model.findById(req.params.id)

            if (registro !== null) {
                return res.status(200).json(registro)
            } else{
                console.log("erro")
            }

        } catch (error) {
            console.log("erro: ", error)
        }
    }

    // async PegarRegistroPorBusca(req, res, next){
    //     try {
    //         const registro = 

    //     } catch (error) {
    //         console.log("erro: ", error)
    //     }
    // }

    async CriarRegistro(req, res, next){
        try {
            const registro = req.body
            const NovoRegistro = await this.model.create(registro)

            if(!NovoRegistro){
                return res.status(400).json({
                    message: "Não foi possível criar o registro."
                })
            }

            return res.status(201).json({
                message: "Registro criado com sucesso."
            })

        } catch (error) {
            console.log("erro: ", error)
        }
    }

    async AtualizarRegistro(req, res, next){
        try {
            const registroAtualizado = await this.model.findByIdAndUpdate(req.params.id, req.body)

            if (!registroAtualizado) {
                return res.status(404).json({ message: "Registro não encontrado." })
            }

            return res.status(200).json({
                message: "Registro Atualizado.",
                registroAtualizado: registroAtualizado
            })

        } catch (error) {
            console.log("erro: ", error)
        }
    }

    async DeletarRegistro(req, res, next){
        try {
            const registroDeletado = await this.model.findByIdAndDelete(req.params.id)

            if (!registroDeletado) {
                return res.status(404).json({ 
                    message: "Registro não encontrado." 
                })
            }

            return res.status(200).json({ 
                message: "Registro deletado com sucesso." 
            })


        } catch (error) {
            console.log("erro: ", error)
        }
    }

}

export default DefaultServices