const mongoose = require('mongoose')

const TransactionModel = mongoose.Schema({
  transaction_name: String,
  transaction_type: String,
  transaction_amount: Number,
  transaction_description: String,
})

module.exports = mongoose.model('transaction', TransactionModel)
