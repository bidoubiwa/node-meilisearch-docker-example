'use strict';


const express = require('express');
const { MeiliSearch } = require("meilisearch")

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', async(req, res) => {
  console.log("MERDE")
  let client = new MeiliSearch({ host: "http://0.0.0.0:7700"})
    console.log(await client.isHealthy(), 'first')
  
    client = new MeiliSearch({ host: "http://meilisearch:7700"})
    console.log(await client.isHealthy(), 'second')
  
    client = new MeiliSearch({ host: "meilisearch:7700"})
    console.log(await client.isHealthy(), 'third')
    
    client = new MeiliSearch({ host: "meilisearch"})
    console.log(await client.isHealthy(), 'fourth')
  res.send('Hello World');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);