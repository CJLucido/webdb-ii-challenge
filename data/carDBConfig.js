//DONT TRY AND CONNECT ROUTER DIRECTLY TO DB FILE

const knex = require('knex')

const configOptions = require('../knexfile').development

module.exports = knex(configOptions)