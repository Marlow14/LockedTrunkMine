
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', function (table) {
        table.increments();
        table.string('username').notNull().unique();
        table.string('password');
        table.timestamps();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable("users");
};

