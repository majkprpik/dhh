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

// @route   POST api/shift/remove
// @desc    Remove a shift
// @access  Public
router.post("/remove", (req, res) => {
    Shift.findOneAndDelete({ _id: req.body.id})
        .then(shift => {
          if(!shift){
            return res.status(404).json({ _id: "Shift to delete not found"});
          } else{
            console.log("Shift removed");
            return res.status(200).end();
          }
        })
        .catch(err => console.log(err));
})

// @route   PUT api/shift/update
// @desc    Update a shift
// @access  Public
router.put("/update", (req, res) => {
  const { errors, isValid } = validateShiftInput(req.body)
  if(!isValid) {
      return res.status(400).json(errors)
  }

  Shift.findOneAndUpdate({_id: req.body.id}, req.body)
      .then(shift_update => {
        if(!shift_update){
          return res.status(404).json({_id: "Shift to update not found"});
        } else {
          console.log("Shift updated");
          return res.status(200).end();
        }
      })
      .catch(err => console.log(err));

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
