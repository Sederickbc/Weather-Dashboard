

//var or let or const = (assignment) value - string, number, boolean, function, object, array, class
const date = new Date();

window.addEventListener('load', function(){
  var elems = document.querySelectorAll('.carousel');
var instances = M.Carousel.init(elems);
})

function cityQuery(arg){

    $.ajax({
        method: "GET",
        url: `http://api.openweathermap.org/data/2.5/weather?q=${arg}&units=imperial&appid=04417fbfbf7d0c0810d6eb5001884000`
    }).then(function(response){
        allQuery(response.coord.lat,response.coord.lon,response.name)
        console.log(response);
        // document.getElementById("currentWeather")
        $("#weather").append(`<div class='jumbotron row'><h3>${response.name} 
        (${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()})</h3><div>Temperature: ${response.main.temp}</div>
        <div>Humidity: ${response.main.humidity}%</div><div>Wind Speed: ${response.wind.speed}</div><div>Longitude: ${response.coord.lon}</div><div class='row'>Latitude: ${response.coord.lat}</div></div>`)
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
            // let listItems = '';
            // let cards = '';
            // response.daily.forEach(function(item, i){
            //     listItems += `<li class="tab"><a href="#tab${i}">${date.getMonth()+1}/${date.getDate()+i} - ${item.weather[0].description}</a></li>`
            // })
            // response.daily.forEach(function (item, i) {
            //     cards += `<div id="tab${i}"><div>Temp - ${item.temp.day}</div><div>Clouds - ${item.clouds}</div>
            //     <div>Humidity - ${item.humidity}%</div><div>Wind Speed - ${item.wind_speed}%</div></div>`
            // })

            // $("#weather").append(`<div class="card">
            //     <div class="card-content">
            //         <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
            //     </div>
            //     <div class="card-tabs">
            //         <ul class="tabs tabs-fixed-width">
            //             ${listItems}
            //         </ul>
            //     </div>
            //     <div class="card-content grey lighten-4">
            //         ${cards}
            //     </div>
            // </div>`)

            response.daily.forEach(function(item,i){
                 $("#weather").append(`<div class='col s3'><div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" style='width: 40%; margin:auto;' src="https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png">
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">${date.getMonth() + 1}/${date.getDate() + i}<i class="material-icons right">more_vert</i></span>
      <p><a href="#">${item.weather[0].description}</a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
      <div>Temp - ${item.temp.day}</div><div>Clouds - ${item.clouds}</div>
            <div>Humidity - ${item.humidity}%</div><div>Wind Speed - ${item.wind_speed}%</div>
    </div>
  </div></div>`)
            })
        })
 }

//  success: function(response){
//    $("li").remove();
//    response.forEach(function(data) {
//       $(".messages").append("<li>" + data.username + ":" + data.text + "</li>");
//    });
// }
