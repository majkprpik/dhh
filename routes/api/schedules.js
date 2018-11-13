const express = require("express")
const router = express.Router()

// Load input validation

// Load agent model
const Schedule = require("../../models/Schedule")

// @route   POST api/schedules
// @desc    Add a schedule
// @access  Public
router.post("/", (req, res) => {
    Schedule.findOne({ month: req.body.month })
        .then(schedule => {
            if(schedule) {
                return res.status(400).json({ month: "Schedule already exists" })
            } else {
                const newSchedule = new Schedule({
                    month: req.body.month,
                    days: req.body.days
                })

                newSchedule.save()
                    .then(schedule => res.json(schedule))
                    .catch(err => console.log(err))
            }
        })
})

// @route   PATCH api/schedules/:id
// @desc    Update a schedule
// @access  Public
router.patch("/:id", (req, res) => {
    Schedule.findOneAndUpdate({_id: req.params.id}, req.body, { new: true })
        .then(schedule => {
          if(!schedule){
            return res.status(404).json({id: "Schedule to update not found"});
          } else {
            res.json(schedule)
          }
        })
        .catch(err => console.log(err));
  })

// @route   GET api/schedules
// @desc    Add a schedule
// @access  Public
router.get("/", (req, res) => {
    Schedule.find()
        .then(schedule => res.json(schedule))
        .catch(err => res.status(404).json({ noschedulesfound: "No schedules where found" }))
})

module.exports = router
