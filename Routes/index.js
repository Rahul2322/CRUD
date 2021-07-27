const router = require('express').Router()
const registerFiles = require('../Controller/register')
const getFiles = require('../Controller/showFiles')



router.post('/upload',registerFiles)
router.get('/files/:id',getFiles.singleFile)
router.get('/files',getFiles.allFiles)


module.exports = router