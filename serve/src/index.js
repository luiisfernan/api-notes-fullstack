const express = require('express');
const app = express();

const dotenv = require('dotenv').config()
const cors = require('cors');
const bodyParser = require('body-parser')
app.set('port', process.env.PORT || 3002);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
require('./database.js');
app.use(cors())
app.use('/api/notes', require('./routes/index.js'));

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'))
})