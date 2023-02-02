setInterval(function () {
  //Indianapolis
  let indianapolisElement = document.querySelector("#indianapolis");
  if (indianapolisElement) {
    let indianapolisDate = document.querySelector("#indianapolis .date");
    let indianapolisTime = document.querySelector("#indianapolis .time");
    indianapolisDate.innerHTML = moment().format("MMMM Do, YYYY");
    indianapolisTime.innerHTML = moment()
      .tz("America/Indiana/Indianapolis")
      .format("h:mm:ss [<small>]A[</small>]");
  }
  //Tokyo
  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDate = document.querySelector("#tokyo .date");
    let tokyoTime = document.querySelector("#tokyo .time");
    tokyoDate.innerHTML = moment().format("MMMM Do, YYYY");
    tokyoTime.innerHTML = moment()
      .tz("Asia/Tokyo'")
      .format("h:mm:ss [<small>]A[</small>]");
  }
}, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
     <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss [<small>]A[</small>]"
          )}</div>
        </div>`;
}

let citiesSelect = document.querySelector("#selectCity");
citiesSelect.addEventListener("change", updateCity);
