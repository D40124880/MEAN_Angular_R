var controller = require('./../controllers/controller.js');
var path = require('path');
module.exports = function (app) {
    app.get('/api/dogs', controller.index);
    app.post('/api/dogs', controller.create);
    app.get('/api/dogs/:id', controller.singleDog);
    app.put('/api/dogs/:id', controller.updateDog);
    app.delete('/api/dogs/:id', controller.deleteDog);
    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./public/dist/index.html"))
    });
}

