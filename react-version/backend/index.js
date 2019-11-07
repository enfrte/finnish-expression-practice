const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Test that node is working!'))

app.listen(2019, () => console.log('Example app listening on port 2019!'))
