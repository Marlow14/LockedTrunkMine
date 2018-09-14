
exports.up = function(knex, Promise) {
    return Promise.try(()=>{
        return knex.schema.createTable('scores', function(table){
            table.increments('id');
            table.text('homeTeam');
            table.text('awayTeam');
            table.integer('homeScore');
            table.integer('awayScore');
            table.date('date');
        })
    }).then(()=>{
        return knex('scores').insert([
            {
                homeTeam: 'Ravens',
                awayTeam: 'Steelers',
                homeScore: 23,
                awayScore: 21,
                date: new Date(2018,10,20)
            },
            {
                homeTeam: 'Steelers',
                awayTeam: 'Ravens',
                homeScore: 30,
                awayScore: 25,
                date: new Date(2018,11,9)
            }
        ]);
    });
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('scores');
};
