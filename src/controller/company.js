const tieusu = require('../modle/tieusu')
const account = require('../modle/account')
class Nhanvat{
    home(req,res,next){

        if(req.cookies){
            var user = req.cookies.user
            res.locals.user = user            
        }
        company.find({}).lean()
        .then(tieusu=>{
            res.render('company/home',{tieusu})
        })
    }
    form(req,res){
        res.render('company/create')
    }
    save(req,res,next){
        const tieusuSave = new tieusu(req.body)
        tieusuSave.abum = tieusuSave.abum.toString().split(',')
        tieusuSave.save()
        res.redirect('/')
    }
    async info(req,res){
    const user = await account.findOne({id:req.cookies.userId}).lean()
    var userName
    if(user){
        userName =user.name
    }
    else{
        userName = 'user'
    }
        const tieusu = await company.findOne({slug:req.param('tieusu')}).lean()
        var idItiem =  tieusu.id || null
        Promise.all([tieusu,userName])
        .then(tieusu=>{
            res.render('company/InfoCompany',{tieusu:image[0],idItiem,tieusu:name[0],tieusu:job,tieusu:tieusu })
        })
    }

}
module.exports = new Nhanvat