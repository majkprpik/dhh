const Schedule = require("../models/Schedule");
const Calendar = require("node-calendar");

var calendar = new Calendar.Calendar();
var month = [1,2,3,4,5,6,7,8,8,10,11,12];
var easter_gold = ["27.3", "14.4", "3.4",  "23.3", "11.4", "31.3", "18.4",
                   "8.4",  "28.3", "16.4", "5.4",  "25.3", "13.4", "2.4",
                   "22.3", "10.4", "30.3", "17.4", "7.4",  "27.3"];
//list od national holidays
const holidays = ["1.1","1.4", "2.4", "1.5", "31.5", "22.6", "25.6", "5.8", "15.8", "8.10", "1.11", "25.12", "26.12"];


module.exports = async function getCalendar(year){
    console.log(year);
    console.log(getEaster(year));
  //for every month get days
  /*  month.forEach(m =>{
      var days = [];
      var date = calendar.itermonthdays2(year, m);*/
//for every day get description
      /*date.forEach(day =>{
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
    //  const newSchedule = new Schedule(insertObject);
      //newSchedule.save().catch(err => console.log(err));
  })*/
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


const getEaster = function(y){
  var index = (y-(Math.trunc(y/19)*19))+1;
  var i_easter = 0;
  var month_all = []
  var month3 = calendar.itermonthdays2(y, 3);
  var month4 = calendar.itermonthdays2(y, 4);
  //getting all days to search
  for (var i=3; i<=6; i++){
    var month = caledndar.itermonthdays2(y,i);
    month.forEach(day => {
      var add_day = [];
      var date = day[0].toString()+"."+i.toString();
      if(day[0]!= 0){
        add_day.push(date);
        add_day.push(+day[1]);
        month_all.push(add_day);
      }
    })
  }
  //founding easter and easter monday
  for(var i = 0; i<month_all.length; i++){
    if(month_all[i][0]==easter_gold[index]){
      if(month_all[i+1][1]==6){
        i_easter = i+1;
        return {uskrs:month_all[i+1][0], uskrsnji_pon: month_all[i+2][0], pentecoste: month_all[i+51][0]}
      }
      else{
        var j = i+1;
        while(month_all[j][1]!= 6){
          j++;
        }
        i_easter = j;
        return {uskrs:month_all[j][0], uskrsnji_pon: month_all[j+1][0], pentecoste: month_all[j+50][0]};
      }
    }
  }

}
