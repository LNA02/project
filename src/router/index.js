const routerCompany = require('./routerCompany') 
function route(app){
    app.use('/',routerCompany)
}

module.exports = route