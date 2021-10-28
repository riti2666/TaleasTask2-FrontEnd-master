let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

// Student Model
let userSchema = require('../models/user.model');


// ketu brenda do behen fundsionet per edit/update/delete/getAllUsers/getUserByid
// READ Users
router.route('/').get((req, res) => {
    userSchema.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  });

  // CREATE User
router.route('/create-user').post((req, res, next) => {
    userSchema.create(req.body, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  });

  // EDIT User
router.route('/edit-user/:id').put((req, res, next) => {
    userSchema.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data)
        console.log('User updated successfully !')
      }
    })
  });

// LOAD User
router.route('/load-user/:id').get((req, res) => {
    userSchema.findById(req.params.id, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
});

// DELETE User
router.route('/delete-user/:id').delete((req, res, next) => {
    userSchema.findByIdAndRemove(req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data
        })
      }
    })
  });

module.exports = router;