const TransactionController = require('../controllers/Transaction.controller')

module.exports = (server) => {
  server.get('/transaction', TransactionController.index)
  server.get('/transaction/:id', TransactionController.find)
  server.post('/transaction', TransactionController.store)
  server.put('/transaction/:id', TransactionController.update)
  server.delete('/transaction/:id', TransactionController.destory)
}
