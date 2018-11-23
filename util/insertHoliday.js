const Schedule = require("../models/Schedule");
const Calendar = require("node-calendar");

var calendar = new Calendar.Calendar();
var month = [1,2,3,4,5,6,7,8,8,10,11,12];
var year = 2018;
//list od national holidays
const holidays = ["1.1","1.4", "2.4", "1.5", "31.5", "22.6", "25.6", "5.8", "15.8", "8.10", "1.11", "25.12", "26.12"];


module.exports = async function getCalendar(){
  //for every month get days
    month.forEach(m =>{
      var days = [];
      var date = calendar.itermonthdays2(year, m);
//for every day get description
      date.forEach(day =>{
        var days_desc = {day:"", type: "", dayOfWeek: "",shift:[]};
        var day_get =  getDays(day, m);
        if(day_get != 0){
          days_desc.day = day_get.day;
          days_desc.type = day_get.type;
          days_desc.dayOfWeek = day_get.dayOfWeek;
          days.push(days_desc);
        }
      })
      var insertObject = {month:m+"/"+year, days};
    //save new schedule
      const newSchedule = new Schedule(insertObject);
      newSchedule.save().catch(err => console.log(err));
  })
}
//function for extracting date, type of day (B, V, R) and day of the week
const getDays = function(day, m){
    var day_of_the_week = ["PO", "UT", "SR", "CE", "PE", "SU", "NE"];
    var dayH = day[0]+"."+m;
    if(day[0]!= 0){
      if(holidays.includes(dayH)){
        return {day:day[0], type: "B", dayOfWeek: day_of_the_week[+day[1]]};
      }
      else{
        if(day[1]==5 || day[1]==6){
          return {day:day[0], type: "V", dayOfWeek: day_of_the_week[+day[1]]};
        }
        else{
          return {day:day[0], type: "R", dayOfWeek: day_of_the_week[+day[1]]};
        }
      }
    }else{return 0}
}
