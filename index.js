function updateCardholderName() {
  const input = document.getElementById("cardholderName");
  const nameElement = document.querySelector("#frontCard #nameAndDate h1");

  nameElement.textContent = input.value;
}

function updatecardNumber() {
  const input = document.getElementById("cardNumber");
  const nameElement = document.querySelector("#frontCard #cardNumbers ");

  nameElement.textContent = input.value;
}

function updateMonth() {
  const input = document.getElementById("month");
  const nameElement = document.querySelector("#frontCard #nameAndDate h2");

  nameElement.textContent = input.value;
}

function updateCvc() {
  const input = document.getElementById("cvc");
  const nameElement = document.querySelector("#backCard h2");

  nameElement.textContent = input.value;
}
