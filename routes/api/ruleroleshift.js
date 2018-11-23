const express = require("express")
const router = express.Router()

// Load input validation
const validateRuleInput = require("../../validation/ruleroleshift")

// Load agent model
const Rule = require("../../models/RuleRoleShift")

// @route   POST api/ruleroleshift
// @desc    Add a rule
// @access  Public
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

// @route   DELETE api/ruleroleshift/:id
// @desc    Remove a rule by id
// @access  Public
router.delete("/:id", (req, res) => {
	Rule.findOneAndDelete({ _id: req.params.id })
		.then(rule => {
			if (!rule) {
				return res.status(404).json({ id: "Rule to delete not found" });
			} else {
				console.log("Rule removed");
				return res.json({ success: true });
			}
		})
		.catch(err => console.log(err));
})

// @route   PATCH api/ruleroleshift/:id
// @desc    Update a rule
// @access  Public
router.patch("/:id", (req, res) => {
	const { errors, isValid } = validateRuleInput(req.body)
	if (!isValid) {
		return res.status(400).json(errors)
	}

	Rule.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
		.then(role => {
			if (!role) {
				return res.status(404).json({ _id: "Role to update not found" });
			} else {
				console.log("Role updated");
				return res.json(role)
			}
		})
		.catch(err => console.log(err));

})

// @route   GET api/ruleroleshift
// @desc    Get all rules
// @access  Public
router.get("/", (req, res) => {
	Rule.find()
		.then(role => res.json(role))
		.catch(err => res.status(404).json({ norulesfound: "No rules where found" }))
})

module.exports = router
