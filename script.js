let dayInput = document.querySelector("#day");
let monthInput = document.querySelector("#month");
let yearInput = document.querySelector("#year");
let dayOutput = document.querySelector("#days");
let monthOutput = document.querySelector("#mnths");
let yearOutput = document.querySelector("#yrs");
let resultBtn = document.querySelector("#showBtn");
let inputs = document.querySelectorAll("input");

resultBtn.addEventListener("click", () => {
  if (dayInput.value == "" || monthInput.value == "" || yearInput.value == "") {
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].value == "")
        inputs[i].style.background = "pink";
    }
  } else if (Number(dayInput.value) <= 0 || Number(dayInput.value) > 31) {
    inputs[0].style.background = "pink";
  } else if (Number(monthInput.value) <= 0 || Number(monthInput.value) > 12) {
    inputs[1].style.background = "pink";
  } else if (Number(yearInput.value) > new Date().getFullYear()) {
    inputs[2].style.background = "pink";
  }
  else {
    var birthdate = `${yearInput.value}-${monthInput.value}-${dayInput.value}`;
    var birthDateObj = new Date(birthdate);
    var currentDateObj = new Date();
    var years = currentDateObj.getFullYear() - birthDateObj.getFullYear();
    var months = currentDateObj.getMonth() - birthDateObj.getMonth();
    var days = currentDateObj.getDate() - birthDateObj.getDate();

    if (days < 0) {
      const lastMonth = new Date(
        currentDateObj.getFullYear(),
        currentDateObj.getMonth() - 1,
        birthDateObj.getDate()
      );

      days = Math.floor((currentDateObj - lastMonth) / (1000 * 60 * 60 * 24));
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    calculateData(dayOutput, days);
    calculateData(monthOutput, months);
    calculateData(yearOutput, years);
  }
});
inputs.forEach((el) => {
  el.addEventListener("keypress", () => {
    el.style.background = "var(--primary-color)";
  })
})
function calculateData(el, type) {
  let i = 0;
  let interval = setInterval(() => {
    i++;
    el.innerHTML = i;
    if (i == type) {
      clearInterval(interval);
    }
  }, 100);
}

window.onload = () => {
  document.querySelector(".card").style.transform = "translatex(0)";
  document.querySelector(".card").style.opacity = "1";
}
