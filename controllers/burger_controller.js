// =====================INSTRUCTION ON BUILDING (BURGER-CONTROLLER)===========>

// 2. In `controllers`, create the `burgers_controller.js` file.

// 3. Inside the `burgers_controller.js` file, import the following:

//    * Express
//    * `burger.js`

// 4. Create the `router` for the app, and export the `router` at the end of your file.

const express = require('express');
const router = express.Router();
const burger = require('../models/burger');

router.get('/', (req, res) => {
    burger.all(function(data) {
        let hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    })
});

router.post('/api/burgers', (req, res) => {
    burger.create(req.body.burger_name, result => {
        console.log(result);
         res.redirect('/');
    })
});

router.put('/api/burgers/:id', (req, res) => {
    burger.update(req.params.id, result => {
    console.log(result);
        res.status(200).end();
    })
});

router.delete('/api/burgers/:id', (req, res) => {
    burger.delete(req.params.id, result => {
        console.log(result);
        res.status(200).end();
    })
});

module.exports = router;