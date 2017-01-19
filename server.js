'use strict'

const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static('./'))

app.get('*', function(request, response) {
  console.log(`New request ${request.url}`);
  response.sendFile('index.html', {root: '.'});
});

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
