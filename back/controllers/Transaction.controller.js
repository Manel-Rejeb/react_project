const TransactionModel = require('../models/Transaction.model')

exports.index = async (_, res) => {
  const data = await TransactionModel.find()
  res.send(data)
}

exports.find = async (req, res) => {
  await TransactionModel.findOne(req.params._id).then((result) =>
    res.send(result)
  )
}

exports.store = async (req, res) => {
  const { body } = req
  res.status(200).send(await new TransactionModel(body).save())
}

exports.update = (req, res) => {
  const { body } = req
  TransactionModel.updateOne({ _id: req.params.id }, body).then((result) =>
    res.send(result)
  )
}

exports.destory = (req, res) => {
  TransactionModel.deleteOne({ _id: req.params.id }).then((result) =>
    res.send(result)
  )
}
