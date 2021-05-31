const success = (message,data) =>{
    var a = {
        success:false,
        message:message,
        data:data
    }
    return a;
}

const error = (message,data) => {
    var a = {
        success:false,
        message:message,
        data:data
    }
    return a;
}

const intervalError = (message) => {
    var a = {
        success:false,
        message:message,
    }
    return a;
}

module.exports = {
    success:success,
    error:error,
    intervalError:intervalError
}