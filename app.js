const express = require ("express");
const app = express();

const path = require('path');

var cors = require('cors')
app.use(cors())

const morgan = require('morgan')
app.use(morgan('dev'))

require('dotenv').config();
const port = process.env.PORT;

require('./dbconn/connection')

app.use(express.static(path.join(__dirname,'/build')));

const login = require('./Routes/LoginRoutes')
app.use('/emp', login)

const emp = require('./Routes/Employeeroutes')
app.use('/emp', emp)










app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname ,'/build/index.html'));
 });

app.listen(port, () => console.log(`Server running on port ${port}`));