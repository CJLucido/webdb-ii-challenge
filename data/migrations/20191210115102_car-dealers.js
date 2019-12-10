
exports.up = function(knex) {
  return knex.schema.createTable('Cars', function(tbl){

    //if dealer table
    // tbl.increment()
    // tbl.string('Make', 50)
    //     .notNullable()
    // tbl.integer('# of Cars Available')
    //     .notNullable()
    //  tbl.string('Models Available', 8000)//because I don't know how to put an array of objects in here yet
    //     .notNullable()
    // tbl.string('Owner', 200)
    //     .notNullable()
    // tbl.string('Company', 200)
    //     .notNullable()
    // tbl.string('Address', 500)
    //     .unique()
    // tbl.boolean('In Business')
    //     .defaultTo(1)

        //for project
    tbl.string('Make', 50)
        .notNullable()
    tbl.integer('VIN')
        .notNullable()
        .unique()
    tbl.string('Model', 100)
        .notNullable()
    tbl.float('Mileage')
        .notNullable()
//OPTIONAL INFO
    tbl.boolean('Clean title')
        .defaultTo(0)
    tbl.boolean('Salvage title')
        .defaultTo(0)
    tbl.string('Transmission type', 200)

    
  })
};

exports.down = function(knex) {
  return knex.schema.dropIfTableExists('Cars')
};
