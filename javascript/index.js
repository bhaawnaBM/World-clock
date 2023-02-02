setInterval(function () {
  // Melbourne
  let melbourneElement = document.querySelector("#melbourne");
  if (melbourneElement) {
    let melbourneDate = document.querySelector("#melbourne .date");
    let melbourneTime = document.querySelector("#melbourne .time");
    melbourneDate.innerHTML = moment().format("MMMM Do, YYYY");
    melbourneTime.innerHTML = moment()
      .tz("Australia/Melbourne")
      .format("h:mm:ss [<small>]A[</small>]");
  }
  //Bangalore
  let bangaloreElement = document.querySelector("#bangalore");
  if (bangaloreElement) {
    let bangaloreDate = document.querySelector("#bangalore .date");
    let bangaloreTime = document.querySelector("#bangalore .time");
    bangaloreDate.innerHTML = moment().format("MMMM Do, YYYY");
    bangaloreTime.innerHTML = moment()
      .tz("Asia/Kolkata")
      .format("h:mm:ss [<small>]A[</small>]");
  }
}, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
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
