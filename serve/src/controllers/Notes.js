const Notes = require('../models/Notes.js')


const getNotes = async (req,res) => {
    const notes = await Notes.find()

    res.status(200).json(notes);
}

const setNotes = async (req,res) => {
    const notes = await Notes.create({
        name: req.body.name,
        description: req.body.description,
    })


    res.status(200).json(notes);
}

const updateNotes = async (req,res) => {
    const notes = await Notes.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(notes);
}


const deleteNotes = async (req,res) => {
    const notes = Notes.findById(req.params.id)

    await notes.remove();
    res.status(200).json({id: req.params.id});
}

module.exports = {
    getNotes,
    setNotes,
    updateNotes,
    deleteNotes
}