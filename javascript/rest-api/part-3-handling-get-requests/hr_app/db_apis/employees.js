const database = require('../services/database.js');

const baseQuery =
 `select id "id",
    descricao "descricao",
    states "states"
  from atividades`;

async function find(context) {
  let query = baseQuery;
  const binds = {};

  if (context.id) {
    binds.id = context.id;

    query += `\nwhere id = :id`;
  }

  const result = await database.simpleExecute(query, binds);

  return result.rows;
}

module.exports.find = find;
