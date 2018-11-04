const express = require("express")
const router = express.Router()
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const keys = require("../../config/keys")
const passport = require("passport")

// Load input validation
const validateAgentInput = require("../../validation/agent")

// Load agent model
const Agent = require("../../models/Agent")

// @route   GET api/agents/test
// @desc    Tests agent route
// @access  Public
router.get("/test", (req, res) => res.json({msg: "Agents works!"}))

// @route   POST api/agents/register
// @desc    Registers a agent
// @access  Public
router.post("/register", (req, res) => {
    const { errors, isValid } = validateAgentInput(req.body)

    if(!isValid) {
        return res.status(400).json(errors)
    }

    Agent.findOne({ email: req.body.email })
        .then(agent => {
            if(agent) {
                return res.status(400).json({ email: "Email already exists" })
            } else {
                const newAgent = new Agent({
                    username: req.body.username,
                    password: req.body.password,
                    email: req.body.email,
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

// @route   POST api/agents/login
// @desc    Logs a agent in
// @access  Public
router.post("/login", (req, res) => {
    const email = req.body.email
    const password = req.body.password

    Agent.findOne({ email }).then(agent => {
        if (!agent) {
            return res.status(404).json({ email: 'Agent not found' })
        }

        // Check password
        bcrypt.compare(password, agent.password).then(isMatch => {
        if (isMatch) {
            // Agent matched
            const payload = { id: agent.id, username: agent.username } // Create JWT Payload

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

// @route   POST api/agents/current
// @desc    Returns current agent
// @access  Private
router.get("/current", passport.authenticate("jwt", { session: false }), (req, res) => {
    res.json({
        username: req.user.username,
        name: req.user.name,
        email: req.user.email
      })
})

module.exports = router