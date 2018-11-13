const express = require("express")
const router = express.Router()

// Load input validation
const validateShiftInput = require("../../validation/shift")

// Load agent model
const Shift = require("../../models/Shift")

// @route   POST api/shifts
// @desc    Add a shift
// @access  Public
router.post("/", (req, res) => {
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
        .catch(err => console.log(err));
})

// @route   DELETE api/shifts/:id
// @desc    Remove a shift by id
// @access  Public
router.delete("/:id", (req, res) => {
    Shift.findOneAndDelete({ _id: req.params.id})
        .then(shift => {
          if(!shift){
            return res.status(404).json({ id: "Shift to delete not found"});
          } else{
            console.log("Shift removed");
            return res.json( {success: true} );
          }
        })
        .catch(err => console.log(err));
})

// @route   PATCH api/shifts/:id
// @desc    Update a shift
// @access  Public
router.patch("/:id", (req, res) => {
  const { errors, isValid } = validateShiftInput(req.body)
  if(!isValid) {
      return res.status(400).json(errors)
  }

  Shift.findOneAndUpdate({_id: req.params.id}, req.body, { new: true })
      .then(shift => {
        if(!shift){
          return res.status(404).json({_id: "Shift to update not found"});
        } else {
          console.log("Shift updated");
          return res.json(shift)
        }
      })
      .catch(err => console.log(err));

})

// @route   GET api/shifts/:id
// @desc    Get shift by id
// @access  Public
router.get("/:id", (req, res) => {
    Shift.findById(req.params.id)
        .then(shift => res.json(shift))
        .catch(err => res.status(404).json({ noshiftfound: "No shift was found" }))
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
