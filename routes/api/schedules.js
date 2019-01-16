const express = require("express")
const router = express.Router()

// Load input validation

// Load agent model
const Schedule = require("../../models/Schedule")
const insertDays = require("../../util/insertHoliday");

/**
 * @apiDefine ScheduleSuccess
 *
 * @apiSuccess {Id} _id Schedule id
 * @apiSuccess {String} month="01/2018" Schedule month
 * @apiSuccess {Array} days Schedule days
 * @apiSuccess {String} days.day="02" Days day
 * @apiSuccess {String} days.type="R" Days type 
 * @apiSuccess {String} days.dayOfWeek="PO" Days day of week 
 * @apiSuccess {Array} shifts Days shifts
 * @apiSuccess {Array} shifts._shift Shift id
 * @apiSuccess {Array} shifts._user User id
 */

/*router.post("/", (req, res) => {
    Schedule.findOne({ month: req.body.month })
        .then(schedule => {
            if(schedule) {
                return res.status(400).json({ message: "Schedule already exists" })
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
})*/


/**
 * @api {patch} schedules/:id Update a schedule
 * @apiName PatchSchedule
 * @apiGroup Schedule
 * 
 * @apiParam {Id} id User id
 * @apiParam {Body} body Cijeli schedule body, da ne ponavljam dva puta, 
 * identicno je bodyu koji se vrati na success (osim sto ne saljete _id nego id, 
 * kako sto je difinirano tu u parametrima)
 *
 * @apiUse ScheduleSuccess 
 * 
 * @apiError {String} message="Schedule to update not found"
 */
router.patch("/:id", (req, res) => {
    Schedule.findOneAndUpdate({_id: req.params.id}, req.body, { new: true })
        .then(schedule => {
          if(!schedule){
            return res.status(404).json({message: "Schedule to update not found"});
          } else {
            res.json(schedule)
          }
        })
        .catch(err => console.log(err));
  })


/**
 * @api {get} schedules/ Get schedules
 * @apiName GetSchedules
 * @apiGroup Schedule
 *
 * @apiUse ScheduleSuccess 
 * 
 * @apiError {String} message="No schedules where found"
 */
router.get("/", (req, res) => {
    Schedule.find()
        .then(schedule => res.json(schedule))
        .catch(err => res.status(404).json({ message: "No schedules where found" }))
})


/**
 * @api {delete} schedules/:id Delete a schedule
 * @apiName DeleteSchedule
 * @apiGroup Schedule
 * 
 * @apiParam {Id} id User id
 *
 * @apiSuccess {String} message="Schedule removed"
 * 
 * @apiError {String} message="Schedule to delete not found"
 */
router.delete("/:id", (req, res) => {
    Schedule.findOneAndDelete({ _id: req.params.id})
        .then(shift => {
          if(!shift){
            return res.status(404).json({ message: "Schedule to delete not found"});
          } else{
            console.log("Schedule removed");
            return res.json( {message: "Schedule removed"} );
          }
        })
        .catch(err => console.log(err));
})


/**
 * @api {delete} schedules/:id Delete all schedules
 * @apiName DeleteSchedules
 * @apiGroup Schedule
 *
 * @apiSuccess {String} message="Schedules removed"
 */
router.delete("/", (req, res) => {
    Schedule.deleteMany({})
      .then(shift =>{
        return res.json({message: "Schedules removed"});
      })
})


/**
 * @api {get} schedules/genereate/year Generate schedule
 * @apiName GenerateSchedules
 * @apiGroup Schedule
 * 
 * @apiParam {Number=2018} year Schedule year
 *
 * @apiSuccess {String} message="Schedules added"
 */
router.get("/generate/:year", (req, res) => {
    insertDays(req.params.year);
    return res.json({message: "Schedules added"})
})

module.exports = router
