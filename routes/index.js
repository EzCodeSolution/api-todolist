
const authv1 = require("./v1/auth/auth")
const index = require("./anonymous/index")
const worklist = require('./v1/WorkList/worklist')
module.exports = {
    v1 : authv1,
    index:index,
    worklist:worklist
}