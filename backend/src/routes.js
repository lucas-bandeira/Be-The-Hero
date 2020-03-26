/**
 * Rota / Recurso
 */

 /**
  * metodos HTTP:
  * 
  * GET: Buscar/listar uma informacaao do back-end
  * POST: Criar uma informacaao no back-end
  * PUT: Alterar uma informacao no back-end
  * DELETE: Deletear uma informacao no back-end
  */

  /**
   * Tipos de parametros:
   * 
   * Query Params: Parametros nomeados enviados na rota apos *?* (filtros, paginacao)
   * Route Params: Parametros utilizados para identificar recursos `/:id`
   * Request Body: Corpo da requisicao utilizado para criar ou alterar recursos
   */

   /**
    * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
    * NoSQL: MongoDB, CouchDB, etc
    */

    /**
     * Driver: SELECT * FROM users
     * Query Builder: table('users').select('*').where()
     */

const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id',IncidentController.delete);

module.exports = routes;