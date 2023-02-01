setInterval(function () {
  // Indianapolis
  let indianapolisDate = document.querySelector("#indianapolis .date");
  let indianapolisTime = document.querySelector("#indianapolis .time");
  indianapolisDate.innerHTML = moment().format("MMMM Do, YYYY");
  indianapolisTime.innerHTML = moment()
    .tz("America/Indiana/Indianapolis")
    .format("h:mm:ss [<small>]A[</small>]");

  //Bangalore
  let bangaloreDate = document.querySelector("#bangalore .date");
  let bangaloreTime = document.querySelector("#bangalore .time");
  bangaloreDate.innerHTML = moment().format("MMMM Do, YYYY");
  bangaloreTime.innerHTML = moment()
    .tz("Asia/Kolkata")
    .format("h:mm:ss [<small>]A[</small>]");
}, 1000);
