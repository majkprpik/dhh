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
const sendPassword = require("../../util/passwordMail")

// Load models
const User = require("../../models/User");

// @route   POST api/users
// @desc    Registers a user
// @access  Public
router.post("/", (req, res) => {
	const { errors, isValid } = validateUserInput(req.body);

	if (!isValid) {
		return res.status(400).json(errors);
	}

	User.findOne({ email: req.body.email }).then(user => {
		if (user) {
			return res.status(400).json({ email: "Email already exists" });
		} else {
			const generatedPassword = randomstring.generate(6)

			const newUser = new User({
				password: generatedPassword,
				email: req.body.email,
				name: req.body.name,
				surname: req.body.surname,
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
								"username": user.username,
								"email": user.email,
								"name": user.name,
								"surname": user.surname,
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


// @route   PATCH api/shifts/:id
// @desc    Update a shift
// @access  Public
router.patch("/:id", (req, res) => {
	const { errors, isValid } = validateUserInput(req.body);

	if (!isValid) {
		return res.status(400).json(errors);
	}

	User.findOneAndUpdate({ _id: req.params.id }, req.body.user, { new: true })
		.then(user => {
			if (!user) {
				return res.status(404).json({ error: "User to update not found" });
			} else {
				console.log("User updated");
				return res.json({
					"_id": user._id,
					"username": user.username,
					"email": user.email,
					"name": user.name,
					"surname": user.surname,
					"_role": user._role,
					"monthlyNumberOfHours": user.monthlyNumberOfHours
				})
			}
		})
})

// @route   POST api/users/login
// @desc    Login a user
// @access  Public
router.post("/login", (req, res) => {
	const email = req.body.email;
	const password = req.body.password;

	User.findOne({ email }).then(user => {
		if (!user) {
			return res.status(404).json({ email: "User not found" });
		}

		// Check password
		bcrypt.compare(password, user.password).then(isMatch => {
			if (isMatch) {
				// User matched
				const payload = { id: user.id, username: user.username }; // Create JWT Payload

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
				return res.status(400).json({ password: "Password incorrect" });
			}
		});
	});
});

// @route   GET api/users/hours
// @desc    Calculate hours for all users
// @access  Public
router.get("/hours", (req, res) => {
	setWorkHours()
	return res.json({ message: "Work hours calculated!" })
});

// @route   DELETE api/users/:id
// @desc    Remove a user
// @access  Public
router.delete("/:id", (req, res) => {
	User.findOneAndDelete({ _id: req.params.id })
		.then(user => {
			if (!user) {
				return res.status(404).json({ id: "User to delete not found" });
			} else {
				console.log("User removed");
				return res.json({ success: true });
			}
		})
		.catch(err => console.log(err));
})

// @route   GET api/users/:id
// @desc    Get user
// @access  Public
router.get("/:id", async (req, res) => {
	User.findById(req.params.id, ("-password"))
		.then(user => {
			res.json(user)
		})
		.catch(err => res.status(404).json({ nouserfound: "No user was found" }));
});

// @route   GET api/users
// @desc    Get all users
// @access  Public
router.get("/", (req, res) => {
	User.find({}, ("-password"))
		.then(user => res.json(user))
		.catch(err => res.status(404).json({ nousersfound: "No users was found" }));
});

// @route   GET api/users/current
// @desc    Returns current user
// @access  Private
router.get("/current", passport.authenticate("jwt", { session: false }),
	(req, res) => {
		res.json({
			name: req.user.name,
			email: req.user.email
		});
	}
);

// @route   Post api/users/logout
// @desc    Logout
// @access  Public
router.post("/logout", (req, res) => {
	req.logout();
	res.json({ message: "Successfully logged out" });
});

module.exports = router;
