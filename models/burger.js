//===================INSTRUCTION ON BURGER.JS FILE=====> GOAL

// * Inside your `burger` directory, create a folder named `models`.

//   * In `models`, make a `burger.js` file.

//     * Inside `burger.js`, import `orm.js` into `burger.js`

//     * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.

//     * Export at the end of the `burger.js` file.
const orm = require('../config/orm.js');

const burger = {
    all: (cb) => {
        orm.all("burgers", function(res) {
            cb(res);
        });
    },

    create: (cols, vals, cb) => {
        org.create("burgers", cols, vals, function(res) {
            cb(res);
        });
    },

    update: (objColVals, condition, cb) => {
        orm.update("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    },
    
    delete: (condition, cb) => {
        orm.delete("burgers", condition, function(res) {
            cb(res);
        });
    }
};

module.export = burger;