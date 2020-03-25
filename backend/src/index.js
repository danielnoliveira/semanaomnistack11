const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());//para entender o conteudo do body
app.use(routes);
/**
 *  Rota / Recurso
 */

 /**
  *  Metodo HTTP:
  * 
  * GET: Buscar uma informação do back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletar uma informação no back-end
  */
 /**
  * Tipos de parâmetros:
  * 
  *     Query Params: Parâmetros nomeados enviados na rota após '?' (Filtros,Paginação)
  *     Route Params: Parâmatros utilizados para identificar recursos
  *     Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  */

  /**
   * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
   * NoSQL: MongoDB, CouchDB, etc
   */

   /**
    *  Driver:  select * from users
    * Query builder(Javascript): table('users').select('*').where()
    */
app.listen(3333);