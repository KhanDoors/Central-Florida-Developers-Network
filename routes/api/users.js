const express = require('express');
const router = express.Router();
const User = require('../../models/User');


router.get('/test', (req, res) => res.json({msg: "Users Works"}));


router.post('/register', (res, res) => {
    User.findOne({ email: req.body.email })
    .then(user => {
        if(user){
            return res.statusCode(400).json({ email: 'Email already exists'});
        }else{
            const newUser = new User({
               name: req.body.name,
                email: req.body.email,
                avatar,
                password: req.body.password
            });
        }
    })
});





module.exports = router;


