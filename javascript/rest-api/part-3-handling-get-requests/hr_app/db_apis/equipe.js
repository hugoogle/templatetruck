const database = require('../services/database.js');

const baseQuery =
 `select equ_codigo "codigo",
    equ_nome "nome"
  from equipes`;


async function find(context) {
  let query = baseQuery;
  const binds = {};

  if (context.codigo) {
    binds.codigo = context.codigo;

    query += `\nwhere equ_codigo = :codigo`;
  }



  const result = await database.simpleExecute(query, binds);

  return result.rows;
}

module.exports.find = find;
