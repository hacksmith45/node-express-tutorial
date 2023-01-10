const express = require('express')
const router = express.Router()

const {
    getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson
} = require('../controllers/people')


router.post('/',getPeople)



router.get('/',createPerson)


router.post('/postman',createPersonPostman)


router.put('/:id',updatePerson)


router.delete('/:id',deletePerson)


module.exports = router