let display = document.getElementById("display");
let memory = 0; // Hafıza değişkeni

function input(value) {
  display.textContent += value;
}

function clearDisplay() {
  display.textContent = "";
}

function deleteLast() {
  display.textContent = display.textContent.slice(0, -1);
}

function calculate() {
  try {
    display.textContent = eval(display.textContent);
  } catch {
    display.textContent = "Error";
  }
}

function memoryAdd() {
  memory += parseFloat(display.textContent) || 0;
  clearDisplay(); 
}

function memoryClear() {
  memory = 0;
}

function memoryRecall() {
  display.textContent = memory;
}
