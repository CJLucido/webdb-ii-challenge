
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
          Make: 'Ford',
          VIN : 123456,
          Model: 'Zebra',
          Mileage: 876543
          
        },
        {
          Make: 'Tesla',
          VIN : 1,
          Model: 'T',
          Mileage: 5,
          'Clean title': true,
          'Transmission type': "electric motor"
        },
        {
          Make: 'Buick',
          VIN : 5437889,
          Model: 'Adventure',
          Mileage: 999999
          
        }
      ]);
    });
};
