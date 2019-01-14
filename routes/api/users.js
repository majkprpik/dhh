const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");
const Validator = require("validator")
const randomstring = require("randomstring");

// Load input validation
const validateUserInput = require("../../validation/user");

// Load utils
const setWorkHours = require("../../util/workHours")
const setVacationDays = require("../../util/vacationDays")
const sendPassword = require("../../util/passwordMail")

// Load models
const User = require("../../models/User");

/**
 * @apiDefine UserSuccess
 *
 * @apiSuccess {Id} _id User id
 * @apiSuccess {String} email User email
 * @apiSuccess {String} firstname User firstname
 * @apiSuccess {String} lastname User lastname
 * @apiSuccess {Number} vacationDays User vacationDays 
 * @apiSuccess {String} _role Role id 
 * @apiSuccess {Array} monthlyNumberOfHours User number of hours
 * @apiSuccess {Array} monthlyNumberOfHours.month="01/2018" Month
 * @apiSuccess {Array} monthlyNumberOfHours.numberOfHours Number of hours
 */


/**
 * @api {post} users/ Register a user
 * @apiName PostUser
 * @apiGroup User
 * 
 * @apiParam {String{6-30}} password User password
 * @apiParam {Email} email User email
 * @apiParam {String} firstname User firstname
 * @apiParam {String} lastname User lastname
 * @apiParam {Id} _role Role id
 *
 * @apiUse UserSuccess
 * 
 * @apiError {String} message="Email already exists"
 */
router.post("/", (req, res) => {
	const { errors, isValid } = validateUserInput(req.body);

	if (!isValid) {
		return res.status(400).json(errors);
	}

	User.findOne({ email: req.body.email }).then(user => {
		if (user) {
			return res.status(400).json({ message: "Email already exists" });
		} else {
			const generatedPassword = randomstring.generate(6)

			const newUser = new User({
				password: generatedPassword,
				email: req.body.email,
				firstname: req.body.firstname,
				lastname: req.body.lastname,
				_role: req.body._role
			});

			sendPassword(generatedPassword, newUser.email)

			bcrypt.genSalt(10, (err, salt) => {
				bcrypt.hash(newUser.password, salt, (err, hash) => {
					newUser.password = hash;
					newUser
						.save()
						.then(user => {
							res.json({
								"_id": user._id,
								"email": user.email,
								"firstname": user.firstname,
								"lastname": user.lastname,
								"vacationDays": user.vacationDays,
								"_role": user._role,
								"monthlyNumberOfHours": user.monthlyNumberOfHours
							})
						})
						.catch(err => console.log(err));
				});
			});
		}
	});
});


/**
 * @api {post} users/login Login a user
 * @apiName LoginUser
 * @apiGroup User
 * 
 * @apiParam {String{6-30}} password User password
 * @apiParam {Email} email User email
 *
 * @apiSuccess {Boolean} success="true"
 * @apiSuccess {Token} token="'Bearer' + token"
 * 
 * @apiError {String} message="User not found"
 */
router.post("/login", (req, res) => {
	const email = req.body.email;
	const password = req.body.password;

	User.findOne({ email }).then(user => {
		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}

		// Check password
		bcrypt.compare(password, user.password).then(isMatch => {
			if (isMatch) {
				// User matched
				const payload = { id: user.id, email: user.email }; // Create JWT Payload

				// Sign token
				jwt.sign(
					payload,
					keys.secretOrKey,
					{ expiresIn: 3600 },
					(err, token) => {
						res.json({
							success: true,
							token: "Bearer " + token
						});
					}
				);
			} else {
				return res.status(400).json({ message: "Password incorrect" });
			}
		});
	});
});


/**
 * @api {patch} users/:id Update a user
 * @apiName PatchUser
 * @apiGroup User
 * 
 * @apiParam {Id} id User id
 * @apiParam {Email} email User email
 * @apiParam {String} firstname User firstname
 * @apiParam {String} lastname User lastname
 * @apiParam {Id} _role Role id
 *
 * @apiSuccess {Id} _id User id
 * @apiSuccess {String} email User email
 * @apiSuccess {String} firstname User firstname
 * @apiSuccess {String} lastname User lastname
 * @apiSuccess {Number} vacationDays User vacationDays 
 * @apiSuccess {String} _role Role id 
 * 
 * @apiError {String} message="User to update not found"
 */
router.patch("/:id", (req, res) => {
	const { errors, isValid } = validateUserInput(req.body);

	if (!isValid) {
		return res.status(400).json(errors);
	}

	User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
		.then(user => {
			if (!user) {
				return res.status(404).json({ message: "User to update not found" });
			} else {
				console.log("User updated");
				return res.json({
					"_id": user._id,
					"email": user.email,
					"firstname": user.firstname,
					"lastname": user.lastname,
					"_role": user._role
				})
			}
		})
})


/**
 * @api {patch} users/:id Update users password
 * @apiName PatchUsersPassword
 * @apiGroup User
 * 
 * @apiParam {Id} id User id
 * @apiParam {String} passwrod User password
 *
 * @apiSuccess {String} email User email
 * @apiSuccess {String} message="Password changed!"
 */
router.patch("/:id/password", (req, res) => {
	let errors = {}

	if (Validator.isEmpty(req.body.password)) {
		errors.password = "Password field is required"
	}

	if (!Validator.isLength(req.body.password, { min: 5, max: 30 })) {
		errors.password = "Password must be between 5 and 30 characters"
	}

	User.findOne({ _id: req.params.id }).then(user => {
		if (user) {
			bcrypt.genSalt(10, (err, salt) => {
				bcrypt.hash(req.body.password, salt, (err, hash) => {
					user.password = hash;
					user
						.save()
						.then(user => {
							res.json({
								message: "Password changed!",
								email: user.email
							})
						})
						.catch(err => console.log(err));
				});
			});
		}
	});
})


/**
 * @api {get} users/hours Calculate work hours for all users
 * @apiName GetHours
 * @apiGroup User
 *
 * @apiSuccess {String} message="Work hours calculated!"
 */
router.get("/hours", (req, res) => {
	setWorkHours()
	return res.json({ message: "Work hours calculated!" })
});

/**
 * @api {get} users/vacation Calculate vacation days for all users
 * @apiName GetVacation
 * @apiGroup User
 *
 * @apiSuccess {String} message="Vacation days calculated!"
 */
router.get("/hours", (req, res) => {
	setVacationDays()
	return res.json({ message: "Vacation days calculated!" })
});


/**
 * @api {delete} users/:id Delete user
 * @apiName DeleteUser
 * @apiGroup User
 * 
 * @apiParam {Id} id User id
 * 
 * @apiSuccess {String} message="User deleted"
 * 
 * @apiError {String} message="User to delete not found"
 */
router.delete("/:id", (req, res) => {
	User.findOneAndDelete({ _id: req.params.id })
		.then(user => {
			if (!user) {
				return res.status(404).json({ message: "User to delete not found" });
			} else {
				console.log("User removed");
				return res.json({ message: "User deleted" });
			}
		})
		.catch(err => console.log(err));
})


/**
 * @api {get} users/:id Get user
 * @apiName GetUser
 * @apiGroup User
 * 
 * @apiParam {Id} id User id
 * 
 * @apiUse UserSuccess
 * 
 * @apiError {String} message="No user was found"
 */
router.get("/:id", async (req, res) => {
	User.findById(req.params.id, ("-password"))
		.then(user => {
			res.json(user)
		})
		.catch(err => res.status(404).json({ message: "No user was found" }));
});


/**
 * @api {get} users/:id Get users
 * @apiName GetUsers
 * @apiGroup User
 * 
 * @apiUse UserSuccess
 * 
 * @apiError {String} message="No users were found"
 */
router.get("/", (req, res) => {
	User.find({}, ("-password"))
		.then(user => res.json(user))
		.catch(err => res.status(404).json({ message: "No users were found" }));
});


/**
 * @api {get} users/login/current Get current user
 * @apiName GetCurrentUser
 * @apiGroup User
 *
 * @apiSuccess {Id} _id User id
 * @apiSuccess {Email} email User email
 * @apiSuccess {String} firstname User firstname
 */
router.get("/login/current", passport.authenticate("jwt", { session: false }),
	(req, res) => {
		res.json({
			_id: req.user._id,
			firstname: req.user.firstname,
			email: req.user.email
		});
	}
);


/**
 * @api {post} users/logout Logout
 * @apiName LogoutUser
 * @apiGroup User
 *
 * @apiSuccess {String} message="Successfully logged out"
 */
router.post("/logout", (req, res) => {
	req.logout();
	res.json({ message: "Successfully logged out" });
});

module.exports = router;
