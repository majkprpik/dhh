const express = require("express")
const router = express.Router()

// Load input validation
const validateRuleInput = require("../../validation/ruleroleshift")

// Load agent model
const Rule = require("../../models/RuleRoleShift")

// Load utils
const checkRules = require("../../util/ruleroleshift")

/**
 * @apiDefine RuleRoleShiftSuccess
 *
 * @apiSuccess {Id} _role="5bdda1fe66c7e619987328a3" Role id
 * @apiSuccess {Id} _shift="5bdda62c5af0de0b4c94a49c" Shift id
 */

/**
 * @api {post} ruleroleshift/ Post rule
 * @apiName PostRule
 * @apiGroup RuleRoleShift
 * 
 * @apiParam {String} _role Role id
 * @apiParam {String} _shift Shift id
 *
 * @apiUse RuleRoleShiftSuccess 
 * 
 * @apiError {String} message="Rule already exists"
 */
router.post("/", (req, res) => {
	const { errors, isValid } = validateRuleInput(req.body)
	if (!isValid) {
		return res.status(400).json(errors)
	}

	Rule.findOne({ _role: req.body._role, _shift: req.body._shift })
		.then(rule => {
			if (rule) {
				return res.status(400).json({ message: "Rule already exists" })
			} else {
				const newRule = new Rule({
					_role: req.body._role,
					_shift: req.body._shift
				})

				newRule.save()
					.then(rule => res.json(rule))
					.catch(err => console.log(err))
			}
		})
		.catch(err => console.log(err));
})


/**
 * @api {delete} ruleroleshift/:id Delete rule
 * @apiName DeleteRule
 * @apiGroup RuleRoleShift
 * 
 * @apiParam {String} id Rule id
 *
 * @apiSuccess {String} message="Rule deleted" 
 * 
 * @apiError {String} message="Rule to delete not found"
 */
router.delete("/:id", (req, res) => {
	Rule.findOneAndDelete({ _id: req.params.id })
		.then(rule => {
			if (!rule) {
				return res.status(404).json({ message: "Rule to delete not found" });
			} else {
				console.log("Rule removed");
				return res.json({ message: "Rule deleted" });
			}
		})
		.catch(err => console.log(err));
})


/**
 * @api {patch} ruleroleshift/:id Update rule
 * @apiName UpdateRule
 * @apiGroup RuleRoleShift
 * 
 * @apiParam {String} id Rule id
 * @apiParam {Body} body Cijeli rule body, da ne ponavljam dva puta, 
 * identicno je bodyu koji se vrati na success (osim sto ne saljete _id nego id, 
 * kako sto je difinirano tu u parametrima)
 *
 * @apiUse RuleRoleShiftSuccess 
 * 
 * @apiError {String} message="Rule to update not found"
 */
router.patch("/:id", (req, res) => {
	const { errors, isValid } = validateRuleInput(req.body)
	if (!isValid) {
		return res.status(400).json(errors)
	}

	Rule.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
		.then(role => {
			if (!role) {
				return res.status(404).json({ message: "Role to update not found" });
			} else {
				console.log("Role updated");
				return res.json(role)
			}
		})
		.catch(err => console.log(err));

})


/**
 * @api {get} ruleroleshift/:id Get rules
 * @apiName GetRules
 * @apiGroup RuleRoleShift
 * 
 * @apiUse RuleRoleShiftSuccess 
 * 
 * @apiError {String} message="No rules where found"
 */
router.get("/", (req, res) => {
	Rule.find()
		.then(role => res.json(role))
		.catch(err => res.status(404).json({ message: "No rules where found" }))
})

module.exports = router
