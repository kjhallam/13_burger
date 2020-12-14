
const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js');

router.get('/', (req, res) => {
    burger.selectAll((data) => { //*burger is not a function*
        let hbsObject = {
            burgers: data
        };
        //console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post('/api/burgers', (req, res) => {
    burger.insertOne([
        'burger_name'
    ], [
        req.body.burger_name, 
    ], (data) => {
        console.log(result);
         res.redirect('/');
    });
});

router.put('/api/burgers/:id', (req, res) => {
    let condition = 'id = ' + req.params.id;
    burger.updateOne({
      devoured: true
    },
        condition, (data) => {
        res.redirect('/');
    });
});

// router.delete('/api/burgers/:id', function(req, res) {
//     let condition = "id = " + req.params.id;

//     burger.delete(req.params.id, function(data) {
//         if (result.affectedRows == 0){
//            return res.status(404).end(); 
//         } else {
//             res.status(200).end();
//         // console.log(result);
//         // res.status(200).end();
//     });
// });

module.exports = router;