const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = express.Router;
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.resolve('./client/build')));

app.get('/', async function homeGet(req, res) {
  res.json({
    status: 'success',
    data: {
      ok: 'tested'
    }
  });
});

app.get('/*', async (req, res) => {
  console.log('Got a request');
  // todo: uncomment later
  // res.sendFile(path.resolve('./client/build/index.html'));
  res.send('<h1>Hi from the app</h1>')
});

app.listen(PORT, function listening() {
  console.log(`Server started on ${PORT}`);
});