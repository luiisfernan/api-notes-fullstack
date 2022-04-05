const {Schema, model} = require('mongoose');


const notesSchema = new Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    }
}, {
    timestamps: true,
})

module.exports = model('Notes', notesSchema)