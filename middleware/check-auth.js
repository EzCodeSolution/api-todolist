const jwt = require('jsonwebtoken');
const model = require('../models')

async function checkAuth(req,res,next){

    try{
        const token = req.headers.authorization.split(" ")[1] //Bearer @#$klfdsljafoi4242@34jasd
        
        var chckbaned =  await model.BanedToken.findAll({where:{Token:token}});
        if(chckbaned.length > 0){
            return res.status(401).send({message:"Plase Login"})
        }
        
        const decodedToken = jwt.verify(token,"gotnotallowtoplayhere");
        req.userData = decodedToken;
        next();
    }catch(e){
        return res.status(401).json({
            message:"Invalid or exired token provied!",
            error:e
        })
    }
}

module.exports = {
    checkAuth :checkAuth
}