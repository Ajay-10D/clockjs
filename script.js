function DisplayTime() {
  var dateTime = new Date();
  var hrs = dateTime.getHours();
  var min = dateTime.getMinutes();
  var sec = dateTime.getSeconds();
  var session = document.getElementById("session");

  if (hrs >= 12) {
    session.innerHTML = "PM";
  } else {
    session.innerHTML = "AM";
  }

  if (hrs > 12) {
    hrs = hrs - 12;
  }

  document.getElementById("hours").innerHTML = hrs;
  document.getElementById("minutes").innerHTML = min;
  document.getElementById("seconds").innerHTML = sec;
}

setInterval(DisplayTime, 10);

function DisplayDate() {
  var tDate = new Date();
  var date = tDate.getDate();
  var month = tDate.getMonth();
  var year = tDate.getFullYear();

  document.getElementById("date").innerHTML = date;
  document.getElementById("month").innerHTML = month;
  document.getElementById("year").innerHTML = year;
}
setInterval(DisplayDate, 10);

function DisplayDay() {
  var tDay = new Date();
  var day = tDay.getDay();

  document.getElementById("day").innerHTML = day;
}
setInterval(DisplayDate, 10);
