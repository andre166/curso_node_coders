const express = require('express')

module.exports = function( server ) {

    //api routes
    const router = express.Router();
    server.use('/api', router);

    //cadastro Routes
    const todoService = require('../api/cadastro/cad');
    todoService.register(router, '/todos');
}