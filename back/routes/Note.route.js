const NoteController = require('../controllers/Note.controller')

module.exports = (server) => {
  server.get('/notes', NoteController.index)
  server.get('/notes/:id', NoteController.find)
  server.post('/notes', NoteController.store)
  server.put('/notes/:id', NoteController.update)
  server.delete('/notes/:id', NoteController.destory)
}
