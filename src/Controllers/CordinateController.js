const knexfile = require("../../knexfile");
const knex = require ("../Database");
const ExpansionPlan = require("../Models/ExpansionPlan");
const expansionPlan = new ExpansionPlan();

class CordinateController {

    async listCordinate() {
        return await expansionPlan.findByCordenate();
    }
}

module.exports = CordinateController;