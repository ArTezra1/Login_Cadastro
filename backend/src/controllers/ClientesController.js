import ClientesModel from "../models/Clientes.model.js";
import DefaultServices from "../services/DefaultServices.js";

class ClientesController extends DefaultServices{
    constructor(){
        super(ClientesModel)
    }
}

export default new ClientesController()