const {knex} = require("knex");
const knex = require("../Database");

class expansionPlan {
    
    async findByCordenate(){
        let cordinate = await knex('aneel_business_units')
                .withSchema('insole-dev')
                .select('cnpj_basico')
            return cordinate;
    }
}
module.exports = expansionPlan;