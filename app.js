const express = require ("express");
const app = express();

const morgan = require('morgan')
app.use(morgan('dev'))

require('dotenv').config();
const port = process.env.PORT;












app.listen(port, () => console.log(`Server running on port ${port}`));