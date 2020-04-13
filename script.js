

//var or let or const = (assignment) value - string, number, boolean, function, object, array, class
const date = new Date();

function cityQuery(arg){
    $.ajax({
        method: "GET",
        url: `http://api.openweathermap.org/data/2.5/weather?q=${arg}&units=imperial&appid=04417fbfbf7d0c0810d6eb5001884000`
    }).then(function(response){
        allQuery(response.coord.lat,response.coord.lon,response.name)
        console.log(response);
        // document.getElementById("currentWeather")
        $("#weather").append(`<div class='jumbotron col'><h3 class='row'>${response.name} 
        (${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()})</h3><div class='row'>Temperature: ${response.main.temp}</div>
        <div class='row'>Humidity: ${response.main.humidity}%</div><div class='row'>Wind Speed: ${response.wind.speed}</div><div class='row'>Longitude: ${response.coord.lon}</div><div class='row'>Latitude: ${response.coord.lat}</div></div>`)
    })
}

$('.search').on('click', function(){
    var userCity = $('#City').val();
    $(".col-2").append(`<button style='width:90%;margin:auto'>${userCity}</button>`)
    cityQuery(userCity);
});

console.log.lon
console.log.lat
console.log.name



 function allQuery(lat, lon){
     $.ajax({
         method: "GET",
         url: `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=04417fbfbf7d0c0810d6eb5001884000`
        }).then(function(response){
            console.log(response);
         $("#weather").append(`<div class='jumbotron col'>Tomorrow<h3 class='row'>${name}
            (${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()})</h3>
            <div class='row'>Temperature: ${response.daily['1'].temp.day}</div>
         <div class='row'>Humidity: ${response.daily['1'].humidity}</div>
         <div class='row'>Clouds: ${response.daily['1'].clouds}</div>   
         <div class='row'>Chance of Rain: ${response.daily['1'].rain}</div>   
              </div>
            </div>`)
               



            
        })
 }

//  success: function(response){
//    $("li").remove();
//    response.forEach(function(data) {
//       $(".messages").append("<li>" + data.username + ":" + data.text + "</li>");
//    });
// }