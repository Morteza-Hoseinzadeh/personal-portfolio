const express = require('express');
const app = express();
const path = require('path');

const http = require('http');
const server = http.createServer(app);

const cors = require('cors');

app.use(cors());
app.use(express.static(path.join(__dirname, './build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './build', 'index.html'));
});

server.listen(3001, () => {
  console.log('Server is running on port 3001');
});
