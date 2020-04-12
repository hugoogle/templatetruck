const meta = require('../db_apis/meta.js');

async function get(req, res, next) {
  try {
    const context = {};

    context.codigo = parseInt(req.params.codigo, 10);
    context.equipe = parseInt(req.params.equipe,  10);


    const rows = await meta.find(context);

    if (req.params.codigo || req.params.equipe) {
      if (rows.length === 1 ) {
        res.status(200).json(rows[0]);
      } else if(rows.length === 2){
        
        res.status(200).json(rows);
     
       
      }else {
        res.status(404).end();
      }
    } else {
      res.status(200).json(rows);
    }
  } catch (err) {
    next(err);
  }
}

module.exports.get = get;
