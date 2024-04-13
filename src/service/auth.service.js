const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;

async function generateToken(payload){
    try {
        return jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });
    } catch (e) {
        return e
    }
}

async function verifyToken(payload){
    try {
        return jwt.verify(payload)
    } catch (e) {
        return e
    }
}

module.exports = {
    generateToken,
    verifyToken
}