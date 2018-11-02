const express = require("express")
const router = express.Router()
const bcrypt = require("bcryptjs")

// Load agent model
const Agent = require("../../models/Agent")

// @route   GET api/posts/test
// @desc    Tests post route
// @access  Public
router.get("/test", (req, res) => res.json({msg: "Agents works!"}))

// @route   GET api/posts/test
// @desc    Tests post route
// @access  Public
router.post("/register", (req, res) => {
    Agent.findOne({ email: req.body.email })
        .then(agent => {
            if(agent) {
                return res.status(400).json({ email: "Email already exists" })
            } else {
                const newAgent = new Agent({
                    username: req.body.username,
                    password: req.body.password,
                    email: req.body.password,
                    name: req.body.name,
                    surname: req.body.surname
                })

                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newAgent.password, salt, (err, hash) => {
                        // if(err){ throw err}
                        newAgent.password = hash
                        newAgent.save()
                            .then(user => res.json(user))
                            .catch(err => console.log(err))
                    })
                })
            }
        })
})

module.exports = router