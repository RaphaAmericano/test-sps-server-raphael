const { generateToken } = require("../service/auth.service");
const { httpServiceDatabase } = require("../service/http.service")

async function authUser(req, res){
    const { email, password } = req.body;
    const users = await httpServiceDatabase.get("/users")
    try {
        const emails = users.data.map(({ email }) => email )
        if(!emails.includes(email)){
            return res.status(400).json({ messag: "Usuário não cadastrado."})
        }
    } catch (error) {
        console.error(error)
        return res.status(404).json({ message: "Erro"})
    }
    
    const user = users.data.find((user) => user.email === email || user.password === password )
    
    try {
        const token = await generateToken({ email, password })        
        return res.status(200).json({ email, token, ...user })
    } catch (error) {
        console.error(error)
        return res.status(404).json({ message: "Erro"})
    }
}

module.exports = {
    authUser
}