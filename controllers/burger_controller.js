
const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js');

router.get('/', (req, res) => {
    burger.selectAll((data) => {
        let hbsObject = {
            burgers: data
        };
        //console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post('/api/burgers', (req, res) => {
    burger.insertOne([
        'burger_name', "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], (result) => {
        console.log(result);
        res.json({ id: result.insertId });
    });
});

router.put('/api/burgers/:id', (req, res) => {
    let condition = 'id = ' + req.params.id;
    burger.updateOne({
      devoured: true,
    }, condition, (result) => {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;