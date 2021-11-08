let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

// Phone Model
let phoneSchema = require('../models/phone.model');

// User Model
let User = require('../models/user.model.js');

// CREATE Phone
router.route('/create-phone').post((req, res, next) => {
  // krijon nje phone te ri, me user id tek qe e mer tek fusha user (req.body.user)
    phoneSchema.create(req.body, (error, data) => {
      if (error) {
        // nese shtohet ky nr cel ne tabelen phone kap error 
        return next(error)
      } else {
        // nese shtohet nr cel me siper ath do shtojme kete phone te sapo u shtua
        // tek lista phone e userit me id qe ja percatuam tek fusha user (req.body.user) 

        // gjejme userin me ane te id tek fusha user (req.body.user) 
        const user = User.findById(req.body.user, (error, userData) => {
            if (error) {
              // nese kap error
              return next(error)
            } else {
              if(userData != null){
                // nese e gjen nje user me ate id, ath tek lista phones e ketij useri shtojme phone tek lista phones me ane te push
                userData.phones.push(data)

                // pasi e shtojme i ruajme ndryshimet per kete rresht
                userData.save();
              }
            }
        });

        res.json(data)
      }
    })
  });

   // LOAD phones
router.route('/load-phones/:id').get(async (req, res, next) => {
  phoneSchema.find({user: req.params.id}, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
});

  module.exports = router;

  