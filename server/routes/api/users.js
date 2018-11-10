const express = require("express")
const router = express.Router()
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const keys = require("../../config/keys")
const passport = require("passport")

// Load input validation
const validateUserInput = require("../../validation/user")

// Load user model
const User = require("../../models/User")

// @route   GET api/users/test
// @desc    Tests user route
// @access  Public
router.get("/test", (req, res) => res.json({msg: "Users works!"}))

// @route   POST api/users/register
// @desc    Registers a user
// @access  Public
router.post("/register", (req, res) => {
    const { errors, isValid } = validateUserInput(req.body)

    if(!isValid) {
        return res.status(400).json(errors)
    }

    User.findOne({ email: req.body.email })
        .then(user => {
            if(user) {
                return res.status(400).json({ email: "Email already exists" })
            } else {
                const newUser = new User({
                    username: req.body.username,
                    password: req.body.password,
                    email: req.body.email,
                    name: req.body.name,
                    surname: req.body.surname
                })

                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        // if(err){ throw err}
                        newUser.password = hash
                        newUser.save()
                            .then(user => res.json(user))
                            .catch(err => console.log(err))
                    })
                })
            }
        })
})

// @route   POST api/users/login
// @desc    Logs a user in
// @access  Public
router.post("/login", (req, res) => {
    const email = req.body.email
    const password = req.body.password

    User.findOne({ email }).then(user => {
        if (!user) {
            return res.status(404).json({ email: 'User not found' })
        }

        // Check password
        bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
            // User matched
            const payload = { id: user.id, username: user.username } // Create JWT Payload

            // Sign token
            jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
            res.json({
                success: true,
                token: "Bearer " + token
            })
            })
        } else {
            return res.status(400).json({ password: "Password incorrect" })
        }
        })
    })
})

// @route   GET api/users/:id
// @desc    Get user by id
// @access  Public
router.get("/:id", (req, res) => {
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(404).json({ nouserfound: "No user was found" }))
})

// @route   GET api/users/current
// @desc    Returns current user
// @access  Private
router.get("/current", passport.authenticate("jwt", { session: false }), (req, res) => {
    res.json({
        username: req.user.username,
        name: req.user.name,
        email: req.user.email
      })
})

module.exports = router