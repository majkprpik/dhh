const express = require("express")
const router = express.Router()

// Load input validation

// Load agent model
const Schedule = require("../../models/Schedule")
const insertDays = require("../../util/insertHoliday");

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

// @route   DELETE api/schedules/:id
// @desc    Remove a schedule by id
// @access  Public
router.delete("/:id", (req, res) => {
    Schedule.findOneAndDelete({ _id: req.params.id})
        .then(shift => {
          if(!shift){
            return res.status(404).json({ id: "Schedule to delete not found"});
          } else{
            console.log("Schedule removed");
            return res.json( {success: true} );
          }
        })
        .catch(err => console.log(err));
})

// @route   DELETE api/schedules/
// @desc    Removes all schedules
// @access  Public
router.delete("/", (req, res) => {
    Schedule.deleteMany({})
      .then(shift =>{
        return res.json({success: true});
      })
})

// @route   GET api/schedules/days
// @desc    get all days
// @access  Public
router.get("/days", (req, res) => {
    insertDays();
    return res.json({messege: "days added"})
})

module.exports = router
