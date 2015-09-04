var _ = require('underscore')

//print now();
//var date = new Date(); 
//console.log('time: ' . date->getTime());
function getData() {
  return [
    {
      end: 1437134976,
      start: 1437127776
    },
    {
      end: 1437206976,
      start: 1437199776
    },
    {
      end: 1437192576,
      start: 1437185376
    },
    {
      end: 1437178176,
      start: 1437170976
    },
    {
      end: 1437164492,
      start: 1437157292
    },
    {
      end: 1437150092,
      start: 1437142892
    },
    {
      end: 1437135692,
      start: 1437128492
    }
  ];
}


function getCumulativeDrivingTime() {
  var times = getData();
  var total = 0;
  
  for(var i = 0; i < times.length; i++){
    var current = (times[i].end - times[i].start)/3600;
    total += current;
  }
  
  console.log(total);  
  return total;
}

function getLastTimeDriven() {
  var times = getData();
  return times[times.length - 1].end;
}

/**
 * This function does this
 */
function isItOkToDriveNow() {
  var drivingTime = getCumulativeDrivingTime();
  var lastTimeDriven = getLastTimeDriven();
  if (drivingTime >= 12){
    var diff = ((Date.now()/1000) - lastTimeDriven)/3600;
    if (diff >= 8){
      return true;
    } else {
      return false;
    }
  } else {
    return true;
  }
}

var okToDrive = isItOkToDriveNow();
console.log(okToDrive);

var driver = {
  this.isItOkToDriveNow = function{
  
}
}

var driverRepository = {
  function getDriverShifts(start = 0, limit = 10) {
    returns driverShifts;
  }  
};

var Tom = new driver;

if(Tom.isItOkToDriveNow) {
  //do something..
}

func OK {
  //Get drivers logs
}

function checkTime() {
  //total up time and check time between timet
}

// brush up on object oriented
// get proficient in OO prototyping in JS
// MVC
// design patterns (i.e. factory, repository)
// modularization
// good naming
// code style
// solving quickly
// doing math in chrome bar, googling
// google hangouts, skype, 


