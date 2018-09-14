
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', table=>{
        table.increments('id');
        table.text('username').notNull().unique();
        table.text('password');
        table.timestamps();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users');
};
