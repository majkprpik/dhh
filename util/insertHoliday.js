const Schedule = require("../models/Schedule");
const Calendar = require("node-calendar");

var calendar = new Calendar.Calendar();
var month = [1,2,3,4,5,6,7,8,8,10,11,12];
//golden_dates for finding easter
var easter_gold = ["27.3", "14.4", "3.4",  "23.3", "11.4", "31.3", "18.4",
                   "8.4",  "28.3", "16.4", "5.4",  "25.3", "13.4", "2.4",
                   "22.3", "10.4", "30.3", "17.4", "7.4",  "27.3"];
//list od national holidays
var holidays;


module.exports = async function getCalendar(year){
    console.log("creating schedule for the year: "+year);
    //getting easter, easter monday and corpus dates
    var easter_dates = getEaster(year);
    //list of holidays
    holidays = ["1.1", "6.1", "1.5", "22.6", "25.6", "5.8", "15.8", "8.10", "1.11", "25.12", "26.12", easter_dates.uskrs, easter_dates.uskrs_pon, easter_dates.tjelovo];


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


const getEaster = function(y){
  var index = (y-(Math.trunc(y/19)*19))+1;
  var i_easter = 0;
  var easter;
  var easter_mon;
  var corpus;
  var pentecoste;
  var month_all = []
  //getting all days to search
  for (var i=3; i<=6; i++){
    var month = calendar.itermonthdays2(y,i);
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
        easter = {dan:month_all[i+1][0], index: i+1};
        easter_mon = {dan: month_all[i+2][0], index: i+2};
        pentecoste = {dan: month_all[i+51][0], index: i+51}
        break;
      }
      else{
        var j = i+1;
        while(month_all[j][1]!= 6){j++};
        i_easter = j;
        easter = {dan:month_all[j][0], index: j};
        easter_mon = {dan: month_all[j+1][0], index: j+1};
        pentecoste = {dan: month_all[j+50][0], index: j+50}
        break;
      }
    }
  }
  //founding corpus date
  for (var i = pentecoste.index; i<month_all.length; i++){
    if(month_all[i+1][1]==6){
      var j = i;
      while(month_all[j][1]!=3){j++};
      corpus = {dan: month_all[j][0], index: j};
      break;
    }
    else{
      var j = i+1;
      while(month_all[j][1]!=6){j++};
      while(month_all[j][1]!=3){j++};
      corpus = {dan: month_all[j][0], index: j};
      break;
    }
  }
  return {uskrs: easter.dan, uskrs_pon: easter_mon.dan, tjelovo: corpus.dan}
}
