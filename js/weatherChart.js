function getFahrenheits(result){
  // Your code goes here
}

function getHours(result){
  // Your code goes here
  timesAndtemps = result['hourly']['data']; //array of objects with time and temperature keys
  let hours = [];
  let militaryTimes = []
  for (let el in timesAndtemps){
    hours.push(timesAndtemps[el]['time'])
   }

   function convertTime(hours) {
     for (let prop of hours) {
       let timeStr = new Date(prop*1000).toString()
       let timeArr = timeStr.split(" ")
       let milTime = timeArr[4]
       //console.log('milTime:', milTime)
       militaryTimes.push(milTime)
     }
   }
   convertTime(hours);
   return militaryTimes;
}

function generateDataSet(labels, data) {
  // Your code goes here
}

function makeRequest(endpoint, success) {
  // Your code goes here
}
