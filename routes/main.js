const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) =>{
    const data = {
        title: "Kamal's Coffee House",
        description: "Welcome to my Coffee House"
    }
    res.render('home',data)

})

router.get('/blog', (req, res, next) =>{
    const data = {
        title: "Kamal's Coffee House",
        description: "Welcome to my Coffee House"
    }
    res.render('blog',data)
})

router.get('/menu', (req, res, next) =>{
    const data = {
        title: "Kamal's Coffee House",
        description: "Welcome to my Coffee House"
    }
    res.render('menu',data)
})
module.exports = router