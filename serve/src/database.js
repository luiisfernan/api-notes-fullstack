const mongoose = require('mongoose');


mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection;
db.once('open', () => console.log('DATABASE'))
db.on('error', error => {
    console.log(error)
})