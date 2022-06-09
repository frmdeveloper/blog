const express = require('express')
const cors = require('cors')
const port = process.env.PORT || 80 || 8080 || 5000 || 3000
const app = express()
app.use(cors())
app.use(express.static('.'))
app.listen(port)