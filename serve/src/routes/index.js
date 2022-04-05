const {Router} = require('express');
const router = Router()

const {getNotes, setNotes, updateNotes, deleteNotes} = require('../controllers/Notes');


router.route('/').get(getNotes).post(setNotes);
router.route('/:id').put(updateNotes).delete(deleteNotes);
module.exports = router;