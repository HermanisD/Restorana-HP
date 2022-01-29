function showTime() {
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  var time = h + ":" + m + ":" + s;
  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").textContent = time;

  setTimeout(showTime, 1000);
}
function showDate() {
  var date = new Date();
  var d = date.getDate(); // 0 - 23
  var m = date.getMonth(); // 0 - 59
  var y = date.getFullYear(); // 0 - 59
  d = d < 10 ? "0" + d : d;
  switch (m) {
    case 0:
      m = "janvāris";
      break;
    case 1:
      m = "februāris";
      break;
    case 2:
      m = "marts";
      break;
    case 3:
      m = "aprīlis";
      break;
    case 4:
      m = "maijs";
      break;
    case 5:
      m = "jūnijs";
      break;
    case 6:
      m = "jūlijs";
      break;
    case 7:
      m = "augusts";
      break;
    case 8:
      m = "septembris";
      break;
    case 9:
      m = "oktobris";
      break;
    case 10:
      m = "novembris";
      break;
    case 11:
      m = "decembris";
      break;
    default:
  }
  var date = y + ".gada " + d + "." + m;
  document.getElementById("MyDateDisplay").innerText = date;
  document.getElementById("MyDateDisplay").textContent = date;

  setTimeout(showDate, 1000);
}
showDate();
showTime();
