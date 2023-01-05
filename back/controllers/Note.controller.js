const NoteModel = require('../models/Note.model')

exports.index = async (_, res) => {
  const data = await NoteModel.find()
  res.send(data)
}

exports.find = async (req, res) => {
  await NoteModel.findOne(req.params._id).then((result) => res.send(result))
}

exports.store = async (req, res) => {
  const { body } = req
  res.status(200).send(await new NoteModel(body).save())
}

exports.update = (req, res) => {
  const { body } = req
  NoteModel.updateOne({ _id: req.params.id }, body).then((result) =>
    res.send(result)
  )
}

exports.destory = (req, res) => {
  NoteModel.deleteOne({ _id: req.params.id }).then((result) => res.send(result))
}
