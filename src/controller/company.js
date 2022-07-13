const tieusu = require('../modle/tieusu')
const account = require('../modle/account')
class Nhanvat {
    home(req, res, next) {

        if (req.cookies) {
            var user = req.cookies.user
            res.locals.user = user
        }
        tieusu.find({}).lean()
            .then(tieusu => {
                res.render('company/home',{tieusu})
            })
    }
    form(req, res) {
        res.render('company/create')
    }
    save(req, res, next) {
        const tieusuSave = new tieusu(req.body)
        console.log(req.body) 
        tieusuSave.save()
        res.redirect('/')
    }
     infos(req, res) {
        const user =  account.findOne({ _id: req.params.id }).lean()
        var userName
        if (user) {
            userName = user.name
        }
        else {
            userName = 'user'
        }
        tieusu.findOne({ _id: req.param('id') }).lean()
        .then(tieusu => {
                res.render('company/InfoCompany', { tieusu })
            })
    }

}
module.exports = new Nhanvat()