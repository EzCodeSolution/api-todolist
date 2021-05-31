const model = require('../../../models')

const getWorkList = async(req,res) => {
    res.status(200).send({success:true,message:"success"})
}

module.exports ={
    getWorkList:getWorkList
}