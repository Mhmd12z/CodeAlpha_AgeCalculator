let dayInput = document.querySelector("#day");
let monthInput = document.querySelector("#month");
let yearInput = document.querySelector("#year");
let dayOutput = document.querySelector("#days");
let monthOutput = document.querySelector("#mnths");
let yearOutput = document.querySelector("#yrs");
let resultBtn = document.querySelector("#showBtn");
resultBtn.addEventListener("click", () => {
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
});

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