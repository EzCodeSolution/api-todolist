const bcryptjs = require('bcryptjs')
const model = require('../../../models')
const resjson = require('../../../helper/returnjson')
const jwt = require('jsonwebtoken')


const login = async(req,res) =>{
    model.Account.findOne({where:{Email:req.body.Email}}).then(rs => {
        if(rs === null){
            res.status(401).json({
                message: "Invalid credentials!"
            })
        }else{
            console.log(rs);
            bcryptjs.compare(req.body.Password,rs.Password, function(err, result){
                if(result){
                    const token = jwt.sign({
                        email:rs.email,
                        userId:rs.id
                    }, 'gotnotallowtoplayhere',function(err, token){
                        res.status(200).json({
                            message:"Authentication successful!",
                            token: token
                        })
                    });
                }else{
                    res.status(200).json({message:"Authentication fail UserName OR Password was worng",error:err})
                }
            });
        }
    }).catch(err => {
        res.status(500).json({message:"something went worng",error:err})
    });
}

const register = async(req,res) =>{
    const {Email,Password,ConfirmPassword,FirstName,LastName,Google,Facebook} = req.body;
    if(Password != ConfirmPassword){
        res.status(200).send({success:false,message:"Password Not Match ConfirmPassword"})
    }
    var findUser = await model.Account.findOne({where:{Email:Email}})
    console.log(findUser)
    if(findUser != null){
        var error = resjson.error("มีผู้ใช้งานบัญชีนี้แล้ว")
        return res.status(404).json(error)
    }else{
        bcryptjs.genSalt(10,function(err,salt){
            bcryptjs.hash(Password, salt, async function(err,hash){
                var newAccunt = { 
                    Email:Email,
                    Password:hash,
                    FirstName:FirstName,
                    LastName:LastName,
                    Google:Google,
                    Facebook:Facebook
                }
                await model.Account.create(newAccunt).then(rs => {
                    var success = resjson.success("สมัครเข้าใช้งานสำเร็จ",rs)
                    res.status(201).json(success)
                }).catch(err =>{
                    var intervalerror = resjson.intervalError("มีบางอย่างผิดพลาด กรุณาลองใหม่")
                    res.status(500).json({intervalerror})
                })
            });
        });
    }

}

const logout = async(req,res) => {
    const token = req.headers.authorization.split(" ")[1]
    const bantoken = {
        Token : token
    }
    await model.BanedToken.create(bantoken).then(rs => {
        res.status(200).send({message:"logout success",success:true})
    }).catch(err => {
        res.status(500).send({message:"something went worng",success:flase})
    })
}

module.exports = {
    login:login,
    register:register,
    logout:logout
}