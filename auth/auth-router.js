const router = require("express").Router();
const bcrypt  = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Users = require('../jokes/users-model.js');
const secrets = require('../api/secret.js');


router.post('/register', (req, res) => {
    const user = req.body;

    const rounds = process.env.HASH_ROUNDS || 12;

    const hash = bcrypt.hashSync(user.password, rounds)

    //update the user password to hashed

    user.password = hash;

    Users.add(user)
         .then(stored => {
             res.status(201).json({
                id: stored.id,
                username: stored.username,
                department: stored.department
             })
         })
         .catch(err => {
             console.log(err);
             res.status(500).json({errorMessage: err.message})
         })
})



router.post('/login', (req, res) => {
    const { username, password } = req.body;

    //update the user password to hashed

    Users.findBy({ username })
         .then(([user]) => {
             //if we find the user, then also  check that the password match
             if (user && bcrypt.compareSync(password, user.password)) {

              const token = generateToken(user);  

                res.status(201).json({ message: `Welcome, ${user.username}`, token })
             } else {
                 res.status(401).json({ message: "You are cannot pass! "})
             }
         })
         .catch(err => {
             console.log(err);
             res.status(500).json({errorMessage: err.message})
         })
})

function generateToken(user) {
    // the data
    const payload = {
        userId: user.id,
        
    };
    const secret = secrets.jwtSecret;
    const options = {
        expiresIn: "1h",
    };

    return jwt.sign(payload, secret, options)
}


module.exports = router;
