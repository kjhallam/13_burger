// =====================INSTRUCTION ON BUILDING (BURGER-CONTROLLER)===========>

// 2. In `controllers`, create the `burgers_controller.js` file.

// 3. Inside the `burgers_controller.js` file, import the following:

//    * Express
//    * `burger.js`

// 4. Create the `router` for the app, and export the `router` at the end of your file.

const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js');

router.get('/', function(req, res) {
    burger.all(function(data) {
        let hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    })
});

router.post('/api/burgers', function(req, res) {
    burger.create(req.body.burger_name, function(result) {
        console.log(result);
         res.redirect('/');
    })
});

router.put('/api/burgers/:id', function(req, res) {
    burger.update(req.params.id, function(result) {
        if (result.changeRows == 0) {
            return res.status(404).end();
        } else {
    console.log(result);
        res.status(200).end();
        }
    });
});

router.delete('/api/burgers/:id', function(req, res) {
    let condition = "id = " + req.params.id;

    burger.delete(req.params.id, function(result) {
        if (result.affectedRows == 0){
           return res.status(404).end(); 
        } else {
            res.status(200).end();
        }
        // console.log(result);
        // res.status(200).end();
    });
});

module.exports = router;