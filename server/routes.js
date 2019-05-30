const controller = require('./controller')

module.exports = function (app){
    app.get('/allProd', controller.index)
    app.get('/prod/:id', controller.display)
    app.post('/prod/create', controller.create)
    app.patch('/prod/:id', controller.update)
    app.delete('/prod/:id', controller.delete)
}   