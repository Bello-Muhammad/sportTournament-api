const isAuth = (req, res, next) => {
    if(!req.session.admin) {
        throw new Error("please make sure you enter your correct details!")
    }

    next();
}

module.exports = isAuth;