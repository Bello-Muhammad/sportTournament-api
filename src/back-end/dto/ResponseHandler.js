class ResponseHandler {

    static success (res, data, statusCode = 200) {
        res.status(statusCode).json({success: true, data, message: 'ok'})
    }

    static error (res, err, statusCode = 400) {
        res.status(statusCode).json({success: false, data: null, message: err})
    }
}

module.exports = ResponseHandler;