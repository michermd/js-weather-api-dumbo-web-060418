document.addEventListener('DOMContentLoaded', function() {
  var API_KEY = "b24696a93ed741db75a79ea310fe8871";
  var CORS_WRAPPER = "https://cors-anywhere.herokuapp.com/"
  var URL = CORS_WRAPPER + "https://api.darksky.net/forecast/" + API_KEY + "/40.7127,-74.0059?exclude=currently?exclude=minutely?exclude=daily";
  var ctx = document.getElementById("NYCWeatherChart").getContext("2d")

  fetch(URL)
    .then(function(response){
          return response.json()
        })
        .then(function(myJson){
          console.log(getHours(myJson))
          //console.log(myJson)
          //console.log('first item:', myJson['hourly']['data'][0]['time'])
          //var data = generateDataSet(getHours(json), getFahrenheits(json));
          //var tempChart = new Chart(ctx).Line(data, { bezierCurve: true });
        })
 });

 //   makeRequest(URL, function(json) {
 //     var data = generateDataSet(getHours(json), getFahrenheits(json));
 //     var tempChart = new Chart(ctx).Line(data, { bezierCurve: true });
 //   });
