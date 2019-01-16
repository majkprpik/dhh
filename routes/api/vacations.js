const express = require("express")
const router = express.Router()
const passport = require("passport")

// Load vacation model
const Vacation = require("../../models/Vacation")

/**
 * @apiDefine VacationSuccess
 *
 * @apiSuccess {Id} _id Vacation id
 * @apiSuccess {Date} start Vacation start date
 * @apiSuccess {Date} end Vacation start end
 * @apiSuccess {Id} _user User id
 * @apiSuccess {Enum="Odbijen/Prihvaćen/U tijeku"} status Vacation status
 */

/**
 * @api {post} vacations/ Add a vacation request
 * @apiName PostVacation
 * @apiGroup Vacation
 * 
 * @apiParam {Date="2019-01-01"} start Vacation start date
 * @apiParam {Date="2019-01-01"} end Vacation start end
 * @apiParam {Id} _user User id
 * @apiParam {String} lastname User lastname
 * 
 * @apiHeader {String} token User token
 *
 * @apiUse VacationSuccess
 * 
 * @apiError {String} message="Vacation request already exists"
 */
router.post("/", passport.authenticate("jwt", { session: false }), 
    (req, res) => {
        Vacation.findOne({ start: req.body.start, end: req.body.end, email: req.user.email })
            .then(vacation => {
                if (vacation) {
                    return res.status(400).json({ message: "Vacation request already exists" })
                } else {
                    const newVacation = new Vacation(req.body)

                    newVacation.save()
                        .then(vacation => res.json(vacation))
                        .catch(err => console.log(err))
                }
            })
            .catch(err => console.log(err));
})

/**
 * @api {patch} vacations/:id Approve or deny vacation
 * @apiName PatchVacation
 * @apiGroup Vacation
 * 
 * @apiParam {Id} id Vacation id
 * @apiParam {Enum="Odbijen/Prihvaćen"} status Vacation status
 * 
 * @apiHeader {String} token User token
 *
 * @apiUse VacationSuccess
 * 
 * @apiError {String} message="Vacation request not found"
 */
router.patch("/:id", passport.authenticate("jwt", { session: false }), 
    (req, res) => {
        Vacation.findOneAndUpdate({ _id: req.params.id}, req.body, { new: true })
            .then(vacation => {
                if (!vacation) {
                    return res.status(400).json({ message: "Vacation request not found" })
                } else {
                    return res.json(vacation)
                }
            })
            .catch(err => console.log(err));
})

/**
 * @api {get} vacations/ Get vacations
 * @apiName GetVacations
 * @apiGroup Vacation
 *
 * @apiUse VacationSuccess
 * 
 * @apiHeader {String} token User token
 * 
 * @apiError {String} message="Vacation request not found"
 */
router.get("/", passport.authenticate("jwt", { session: false }), 
    (req, res) => {
        Vacation.find()
        .then(vacations => res.json(vacations))
        .catch(err => res.status(404).json({ message: "No vacations where found" }))
})

/**
 * @api {get} vacations/:id Get vacations for a user
 * @apiName GetVacationsUser
 * @apiGroup Vacation
 *
 * @apiUse VacationSuccess
 * 
 * @apiParam {Id} id User id
 * 
 * @apiHeader {String} token User token
 * 
 * @apiError {String} message="Vacation request not found"
 */
router.get("/:id", passport.authenticate("jwt", { session: false }), 
    (req, res) => {
        Vacation.findOne({_user: req.params.id})
        .then(vacations => res.json(vacations))
        .catch(err => res.status(404).json({ message: "No vacations where found" }))
})

module.exports = router
