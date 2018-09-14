
exports.up = function(knex, Promise) {
  return knex.schema.createTable('scores', function(table){
      table.increments('id');
      table.text('homeTeam');
      table.text('awayTeam');
      table.integer('homeScore');
      table.integer('awayScore');
      table.date('date');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('scores');
};
