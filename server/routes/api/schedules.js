const express = require("express")
const router = express.Router()

// Load input validation

// Load agent model
const Schedule = require("../../models/Schedule")

// @route   POST api/schedules/test
// @desc    Testing
// @access  Public
router.post("/test", (req, res) => {
    return res.json(req.body.months[0].days[0].shifts[2].user)
})

// @route   POST api/schedules/add
// @desc    Add a schedule
// @access  Public
router.post("/add", (req, res) => {
    Schedule.findOne({ year: req.body.year })
        .then(schedule => {
            if(schedule) {
                return res.status(400).json({ year: "Schedule already exists" })
            } else {
                const newSchedule = new Schedule({
                    year: req.body.year,
                    months: req.body.months
                })

                newSchedule.save()
                    .then(schedule => res.json(schedule))
                    .catch(err => console.log(err))
            }
        })
})

// @route   PUT api/schedules/update
// @desc    Update a schedule
// @access  Public
router.put("/update", (req, res) => {
    Schedule.findOneAndUpdate({_id: req.body._id}, req.body, { new: true })
        .then(schedule => {
          if(!schedule){
            return res.status(404).json({_id: "Schedule to update not found"});
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
