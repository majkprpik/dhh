const express = require("express");
const router = express.Router();

// Load agent model
const HoursLimit = require("../../models/RuleHoursLimit");
const checkHoursLimit = require("../../util/rulehourslimit")

// @route   POST api/rulehourslimit
// @desc    Add a rule of hours limit
// @access  Public
router.post("/", (req, res) => {
  HoursLimit.findOne({month: req.body.month, hoursLimit: req.body.hoursLimit })
      .then(limit => {
        if(limit){return res.status(400).json({message: "Rule already exists"})}
        else{
          const newHoursLimit = new HoursLimit({
            month: req.body.month,
            hoursLimit: req.body.hoursLimit
          })
          newHoursLimit.save().then(limit => res.json(limit)).catch(err => console.log(err))
        }
      })
      .catch(err => console.log(err))
})

// @route   DELETE api/rulehourslimit/:id
// @desc    Remove a rule of hours limit by id
// @access  Public
router.delete("/:id", (req, res) =>{
  HoursLimit.findOneAndDelete({_id: req.params.id})
      .then(limit => {
        if(!limit){return res.status(404).json({id: "Rule to delete not found"})}
        else{
          console.log("Rule removed");
          return res.json({success: true});
        }
      }).catch(err => console.log(err))
})

// @route   PATCH api/rulehourslimit/:id
// @desc    Update a rule of hours limit
// @access  Public
router.patch("/:id", (req, res) => {
  HoursLimit.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
      .then(limit => {
        if(!limit) {return res.status(404).json({_id: "Rule to update not fund"})}
        else{
          console.log("Rule updated");
          return res.json(limit)
        }
      }).catch(err => console.log(err))
})

// @route   GET api/rulehourslimit/:month/:year
// @desc    Chech if user is within limits of working hours
// @access  Public
router.get("/:month/:year", (req, res) => {
	checkHoursLimit(req.params.month, req.params.year)
		.then(limit =>{
      if(!limit){return res.status(404).json({message: "0 kills"})}
			console.log("Users who defines rule founded")
			return res.json(limit);
		})
		.catch(err => console.log(err))
});

// @route   GET api/rulehourslimit
// @desc    Get all rules of hours limit
// @access  Public
router.get("/", (req, res) => {
  HoursLimit.find().then(limit => res.json(limit))
      .catch(err => res.status(404).json({norulesfound: "No rules were found"}))
})

module.exports = router;
