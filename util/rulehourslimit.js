const User = require("../models/User");
const Rule = require("../models/RuleHoursLimit");
const Role = require("../models/Role");

module.exports = async function checkHoursLimit(month, year){
  const users = await getUsers();
  var monthYear = month+"/"+year;
  const rules = await getRules(monthYear);

  var users_to_change = [];
  users.forEach(user => {
    var role = getRoles(user._role);
    var work = user.monthlyNumberOfHours;
    if(work.length<1){console.log("err")}
    work.forEach(numberHours => {
      if(numberHours.month == rules.month){
        if(numberHours.numberOfHours > rules.hoursLimit){
          users_to_change.push({firstname: user.firstname,
                                lastname: user.firstname,
                                role: role.name,
                                now: numberHours.numberOfHours,
                                mustBe: rules.hoursLimit})
        }
      }
    })
  })
  if (users_to_change.length === 0){
    return {message: "everything is OK"};
  } else{
    return users_to_change;
  }
}

const getUsers = function(){
  return User.find();
}
const getRules = function(month){
  return Rule.findOne({month: month});
}
const getRoles = function (id){
  return Role.findOne({_id: id});
}
