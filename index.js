require('dotenv').config();

const PORT = process.env.PORT || 5000;
require('./server')(PORT);
