function updateCardholderName() {
  const input = document.getElementById("cardholderName");
  const nameElement = document.querySelector("#frontCard #nameAndDate h1");

  nameElement.textContent = input.value;
}

function updatecardNumber() {
  const input = document.getElementById("cardNumber");
  const nameElement = document.querySelector("#frontCard #cardNumbers");

  const maxCharacters = 19;

  if (input.value.length > maxCharacters) {
    input.value = input.value.slice(0, maxCharacters);
  }

  nameElement.textContent = input.value;
}

function updateMonth() {
  const input = document.getElementById("month");
  const nameElement = document.querySelector("#frontCard #nameAndDate h2");

  nameElement.textContent = input.value;
}

function updateCvc() {
  const input = document.getElementById("cvcInput");
  const nameElement = document.querySelector("#backCard h2");

  const maxCharacters = 3;

  if (input.value.length > maxCharacters) {
    input.value = input.value.slice(0, maxCharacters);
  }

  nameElement.textContent = input.value;
}
