const account = require('../modle/account')
class authentication {
    login(req,res){
        res.render('account/login', {layout: false})
    }
    createAccount(req,res){
        res.render('account/createAccount', {layout: false})
    }
    save(req,res){
        var newAccount = new account(req.body)
        newAccount.save()
        res.redirect('/authentication')
    }
    access(req,res){
         account.findOne({email:req.body.email}).lean()
         .then(function(info){
             if(!info){
                res.render('account/login',{err:'email ko dung',layout: false})  
                return
             }
             if(info.password != req.body.password ){
                res.render('account/login',{err:'nhap sai mat khau',layout: false})  
                return
             }
             res.cookie('user',info.name)
             res.cookie('userId',info._id)
             res.redirect('/')

         })
        
    }
}
module.exports = new authentication