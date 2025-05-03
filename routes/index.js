const express = require('express')
const router = express.Router()
// const fs = require('fs')
// const multer = require('multer')
// const upload = multer({dest: 'uploads/'})


router.all('/', (req, res)=> {
    res.render('index/')
})

router.all('/converter', (req, res) => {

    if (req.method == 'POST') {
        var file1 = req.body.file1
        var file2 = req.body.file2

        // console.log('file1', file1)
        // console.log('file2', file2)

        res.render('converter/')

    }

    res.redirect('/')
    
})

module.exports = router
