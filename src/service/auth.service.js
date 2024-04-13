const jwt = require("jsonwebtoken");

async function generateToken(payload){
    try {
        return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });
    } catch (e) {
        return e
    }
}

async function verifyToken(payload){
    try {
        return jwt.verify(payload, process.env.JWT_SECRET)
    } catch (e) {
        return e
    }
}

module.exports = {
    generateToken,
    verifyToken
}