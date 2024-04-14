const { httpServiceDatabase } = require("../service/http.service")

async function getAllUser(req, res){
    try {
        const response = await httpServiceDatabase.get("/users")
        if(response.data){
            const { data } = response
            return res.status(200).json({ data })
        }
        return res.status(400).json({ message: "Erro"})
    } catch (error) {
        console.error(error)
        return res.status(404).json({ message: "Erro"})
    }
}

async function getUser(req, res){
    const { id } = req.params

    try {
        const response = await httpServiceDatabase.get(`/users/${id}`)
        if(response.data){
            const { data } = response
            return res.status(200).json({ data })
        }
        return res.status(400).json({ message: "Erro"})
    } catch (error) {
        console.error(error)
        return res.status(400).json({ message: "Erro desconhecido"})
    }
}

async function postUser(req, res){
    const { email, name, password, type } = req.body;

    try {
        const users = await httpServiceDatabase.get("/users")
        const emails = users.data.map(({ email }) => email )
        if(emails.includes(email)){
            return res.status(400).json({ message: "Usuário já cadastrado."})
        }

    } catch (error) {
        console.error(error)
        return res.status(400).json({ message: "Erro desconhecido"})
    }

    try {
        const response = await httpServiceDatabase.post(`/users`, {  email, name, password, type })
        if(response.data){
            const { data } = response
            return res.status(200).json({ data })
        }
        return res.status(400).json({ message: "Erro desconhecido"})
    } catch (error) {
        console.error(error)
        return res.status(404).json({ message: "Erro desconhecido"})
    }
}

async function putUser(req, res){
    const { id } = req.params;
    const { email, name, password, type } = req.body;

    try {
        const response = await httpServiceDatabase.put(`/users/${id}`, {  email, name, password, type })
        if(response.data){
            const { data } = response
            return res.status(200).json({ data })
        }
        return res.status(400).json({ message: "Erro desconhecido"})
    } catch (error) {
        console.error(error)
        return res.status(404).json({ message: "Erro desconhecido"})
    }
}

async function deleteUser(req, res){
    const { id } = req.params
    if(id === "1"){
        // Usuário admin master não pode ser excluído
        return res.status(400).json({ message: "Usuário não pode ser excluído"})
    }
    try {
        const response = await httpServiceDatabase.delete(`/users/${id}`)
        if(response.data){
            const { data } = response
            return res.status(200).json({ data })
        }
        return res.status(400).json({ message: "Erro desconhecido"})
    } catch (error) {
        console.error(error)
        return res.status(404).json({ message: "Erro desconhecido"})
    }
}


module.exports = {
    getAllUser,
    getUser,
    postUser,
    putUser,
    deleteUser
}