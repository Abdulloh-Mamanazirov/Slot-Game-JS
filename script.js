let num1 = Math.round(Math.random() * 7) + 1;
let num2 = Math.round(Math.random() * 7) + 1;
let num3 = Math.round(Math.random() * 7) + 1;

document.write(
  `<span>${num1}</span> <span class="span2">${num2}</span> <span>${num3}</span> <br>`
);

if (num1 == num2 && num2 == num3 && num1 == num3) {
  document.write(
    `<div class="result perfect"> Congratulations! You won $1,000 💵!</div>`
  );
} else if (num1 == num2 || num2 == num3 || num1 == num3) {
  document.write(`<div class="result good"> You won $100 💰!</div>`);
} else {
  document.write(`<div class="result bad"> Unlucky🤦!!!</div>`);
}

function refresh() {
  window.location.reload("Refresh");
}