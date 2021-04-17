const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models");
const User = db.user;

verifyToken = (req, res, next) => {
    let token = req.headers['x-access-token'];

    if (!token) {
        return res.status(403).send({
            message: "ERROR: No token provided"
        });
    }

    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            return res.status(401).send({
                message: "Unauthorized!"
            });
        }
    
        req.userId = decoded.id;
        next();
    });
};

isAdmin = async (req, res, next) => {
    let user = await User.findByPk(req.userId);
    let userRoles = await user.getRoles();
    
    if (userRoles.contains("admin")) {
        next();
        return;
    }

    res.status(403).send({
        message: "ERROR: Requires admin role"
    });
}

isLandlord = async (req, res, next) => {
    let user = await User.findByPk(req.userId);
    let userRoles = await user.getRoles();
    
    if (userRoles.contains("landlord")) {
        next();
        return;
    }

    res.status(403).send({
        message: "ERROR: Requires landlord role"
    });
}

const authJwt = {
    verifyToken: verifyToken,
    isAdmin: isAdmin,
    isLandlord: isLandlord
}

module.exports = authJwt;