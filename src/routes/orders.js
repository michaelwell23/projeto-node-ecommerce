const express = require('express');
const routes = express.Router();

const { onlyUsers } = require('../app/middlewares/session');

const OrderController = require('../app/controllers/OrderController.js');

routes
  .post('/', onlyUsers, OrderController.post)
  .get('/', onlyUsers, OrderController.index)
  .get('/sales', onlyUsers, OrderController.sales)
  .get('/:id', onlyUsers, OrderController.show)
  .post('/:id/:action', onlyUsers, OrderController.update);

module.exports = routes;
