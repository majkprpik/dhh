const express = require("express")
const router = express.Router()

// Load input validation
const validateShiftInput = require("../../validation/shift")

// Load agent model
const Shift = require("../../models/Shift")

// @route   POST api/shift/add
// @desc    Add a shift
// @access  Public
router.post("/add", (req, res) => {
    const { errors, isValid } = validateShiftInput(req.body)

    if(!isValid) {
        return res.status(400).json(errors)
    }

    Shift.findOne({ start: req.body.start, duration: req.body.duration })
        .then(shift => {
            if(shift) {
                return res.status(400).json({ message: "Shift already exists" })
            } else {
                const newShift = new Shift({
                    start: req.body.start,
                    duration: req.body.duration
                })

                newShift.save()
                    .then(shift => res.json(shift))
                    .catch(err => console.log(err))
            }
        })
})

// @route   GET api/shifts
// @desc    Get all shifts
// @access  Public
router.get("/", (req, res) => {
    Shift.find()
        .then(shifts => res.json(shifts))
        .catch(err => res.status(404).json({ noshiftsfound: "No shifts where found" }))  
})

module.exports = router