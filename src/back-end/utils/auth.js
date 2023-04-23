const isAuth = (req, res, next) => {
    if(!req.session.admin) {
        res.redirect('api/v1/adminsignup')
    }

    next();
}

module.exports = isAuth;