const express = require('express');
const routes = express.Route();
const ExpansionPlan = require('../Models/ExpansionPlan')
const expansionPlan = new ExpansionPlan();
const CordinateController = require('../Controllers/CordinateController');
const cordinateController = new CordinateController();

routes.get('/cordinate', async (req, res) => { 
    const response = await cordinateController.listCordinate();
    return res.send({response});
});

module.exports = routes;