const express = require('express')
const cors = require("cors")
require('./connexion')
const user = require('./routers/admin')


const app = express()
const port = 4000

app.use(cors())
app.use(express.json())
app.use(user)


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})