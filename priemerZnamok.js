const addBtn = document.getElementById("addBtn");
const calculateBtn = document.getElementById("calculateBtn");
const grade = document.getElementsByClassName("grade");
const weight = document.getElementsByClassName("weight");
const priemer = document.querySelector(".priemer");
const toggler = document.querySelector(".fas");

addBtn.addEventListener("click", function () {
  const GradesRow = document.createElement("div");
  GradesRow.classList.add("row");
  GradesRow.classList.add("riadok");
  GradesRow.innerHTML =
    '<div class="col-6"><input type="number" class="grade" /></div><div class="col-6"><input type="number" class="weight" /></div>';
  document.getElementById("znamky").appendChild(GradesRow);
});

calculateBtn.addEventListener("click", function () {
  let gradeSpread = [...grade];
  let a = 0;
  let b = 0;
  for (let i = 0; i < gradeSpread.length; i++) {
    a += parseInt(weight[i].value);
    b += parseInt(grade[i].value * weight[i].value);
  }
  let average = b / a;
  if (isNaN(average)) {
    priemer.textContent = " ";
  } else {
    priemer.textContent = average.toFixed(2);
  }
});

//day night mode
//day night mode
//day night mode
const darkBtn = document.querySelector(".fa-moon");
const bodyEl = document.querySelector("body");

const darkMode = () => {
  bodyEl.classList.toggle("dark");
};

darkBtn.addEventListener("click", () => {
  // Get the value of the "dark" item from the local storage on every click
  setDarkMode = localStorage.getItem("dark");

  if (setDarkMode !== "on") {
    darkMode();
    // Set the value of the itwm to "on" when dark mode is on
    setDarkMode = localStorage.setItem("dark", "on");
  } else {
    darkMode();
    // Set the value of the item to  "null" when dark mode if off
    setDarkMode = localStorage.setItem("dark", null);
  }
});

// Get the value of the "dark" item from the local storage
let setDarkMode = localStorage.getItem("dark");

// Check dark mode is on or off on page reload
if (setDarkMode === "on") {
  darkMode();
}
