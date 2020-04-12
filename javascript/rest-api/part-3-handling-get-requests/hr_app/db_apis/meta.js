const database = require('../services/database.js');

const baseQuery =
 `select codigo "codigo",
    equipe "equipe",
    semana "semana",
    seg "seg",
    ter "ter",
    qua "qua",
    qui "qui",
    sex "sex"
  from meta`;

async function find(context) {
  let query = baseQuery;
  const binds = {};

  if (context.codigo) {
    binds.codigo = context.codigo;

    query += `\nwhere codigo = :codigo`;
  }

  if (context.equipe) {
    binds.equipe = context.equipe;

    query += `\nwhere equipe = :equipe`;
  }


  const result = await database.simpleExecute(query, binds);

  return result.rows;
}

module.exports.find = find;
