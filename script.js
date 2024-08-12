const calculator = document.querySelector("calculator");
const keys = document.querySelector("calculator_keys");

keys.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    if (
      action === "add" ||
      action === "subtract" ||
      action === "divide" ||
      action === "divide"
    ) {
      alert("Operator key");
    } else if (!action) {
      alert("number key!");
    } else if (action === "decimal") {
      alert("decimal key");
    } else if (action === "clear") {
      alert("clear key!");
    } else if (action === "calculate") {
      alert("equal key!");
    }
  }
});

const key = e.target;
const action = key.dataset.action;

console.dir(document);
