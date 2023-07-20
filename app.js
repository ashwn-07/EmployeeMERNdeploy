const express = require ("express");
const app = express();

var cors = require('cors')
app.use(cors())

const morgan = require('morgan')
app.use(morgan('dev'))

require('dotenv').config();
const port = process.env.PORT;

require('./dbconn/connection')


const login = require('./Routes/LoginRoutes')
app.use('/emp', login)

const emp = require('./Routes/Employeeroutes')
app.use('/emp', emp)












app.listen(port, () => console.log(`Server running on port ${port}`));