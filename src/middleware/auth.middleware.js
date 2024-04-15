const { verifyToken } = require("../service/auth.service");

async function isAuth(req, res, next){
    const token = req.headers.authorization;

    if(!token || !token.startsWith("Bearer ")){
        return res.status(401).json({ message: "Usuário não autenticado."})
    }
    
    const tokenJwt = token.split(" ")[1]

    try {
        const check = await verifyToken(tokenJwt)
        if(!check){
            return res.status(401).json({ message: "Usuário não autenticado."})
        }        
        next()
    } catch (error) {
        console.error(error)
        return res.status(400).json({ message: "Erro desconhecido"})
    }

}
module.exports = {
    isAuth
}

