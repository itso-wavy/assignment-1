const express = require('express');
// const jsonServer = require('json-server');
const cors = require('cors');

const app = express();
// const jsonServerRouter = jsonServer.router('db.json');

app.use(cors());
app.use(express.json());

app.post('/login', (req, res) => {
  const { userId, pw } = req.body;

  if (userId === 'admin' && pw === '0000') {
    res.json({ msg: 'Login successful' });
  } else {
    res.status(401).json({ msg: 'Invalid credentials' });
  }
});

app.get('/logout', (_req, res) => {
  res.send('GET request to the homepage');
});

app.listen(3000, () => {
  console.log(`SERVER CONNECTED/3000 PORT`);
});
