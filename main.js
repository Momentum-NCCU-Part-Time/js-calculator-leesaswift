let displayWindow = document.getElementById("calculator_display");
let operatorKeys = document.querySelectorAll(
  ".numberbutton, .key--operator"
);
let calculate = document.getElementById("key--equal");
let newCalculation = false;

for (let button of operatorKeys) {
  button.addEventListener("click", (target) => {
    console.log(button.textContent);
     {
      if (button.classList.contains("numberbutton") && newCalculation) {
        displayWindow.textContent = button.textContent;
      } else {
        displayWindow.textContent += button.textContent;
      }
      newCalculation = false;
    }
  });
}



document.getElementById('clearbutton').addEventListener('click', function() {
    location.reload();
})
