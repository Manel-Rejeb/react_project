const mongoose = require('mongoose')

const NoteModel = mongoose.Schema({
  note_title: String,
  note_amount: Number,
  note_description: String,
})

module.exports = mongoose.model('notes', NoteModel)
