const express = require('express')
const companyController = require('../controller/company')
const account = require('../controller/authentication')
const MidwereAuthen = require('../midwere/authen')

const router = express.Router()

router.get('/',companyController.home)
// router.get('/company/InfoCompany',companyController.info)
router.get('/company/InfoCompany/:id',companyController.infos)
router.get('/authentication',account.login)
router.post('/authentication/save',account.save)
router.post('/authentication/access',account.access)
router.get('/authentication/create',account.createAccount)
router.get('/company/save/form',MidwereAuthen.authentication,companyController.form)
router.post('/company/save',companyController.save)


module.exports = router