const sum = document.getElementById("sum");
const check = document.getElementById("check");
const start = document.getElementById("start");

function randomNumber() {
  const random1 = document.getElementById("randomNumber1").value;
  const random2 = document.getElementById("randomNumber2").value;
  return random1, random2;
}

function check2() {
  const sum1 = random1 + random2;
  if ((sum1 = sum)) {
    return alert("true");
  } else {
    return alert("false");
  }
}

check.addEventListener("click", check2);
start.addEventListener("click", random1.remove(0), random2.remove(0));
