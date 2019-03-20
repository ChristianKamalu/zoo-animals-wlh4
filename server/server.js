const express = require('express')
// const bodyParser = require('body-parser')

const AnimalsCtrl = require('./controllers/Animals')

const app = express()
const port = 4009

app.use(express.json())


app.get('/api/animals', AnimalsCtrl.get)
app.post('/api/animals', AnimalsCtrl.create)
app.put('/api/animals/:id', AnimalsCtrl.update)

app.listen(port, () => {
  console.log('listening on port', port)
})