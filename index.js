function updateCardholderName() {
  const input = document.getElementById("cardholderName");
  const nameElement = document.querySelector("#frontCard #nameAndDate h1");

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

function updateAndValidateCardNumber() {
  var numberCardInput = document.getElementById("cardNumber");
  var numberCardErrorMessage = document.getElementById("numberCard-error");
  var notifyButton = document.getElementById("notify-button");
  var nameElement = document.querySelector("#frontCard #cardNumbers");
  var numberCard = numberCardInput.value;
  var numberCardRegex = /^\d{1,19}$/; // Expressão regular para até 19 dígitos

  const maxCharacters = 19;

  if (numberCard.length > maxCharacters) {
    numberCardInput.value = numberCard.slice(0, maxCharacters);
  }

  nameElement.textContent = numberCard;

  if (!numberCardRegex.test(numberCard)) {
    numberCardInput.style.borderColor = "#ff5050";
    numberCardErrorMessage.style.display = "block";
    numberCardErrorMessage.textContent = "Wrong format, numbers only";
    notifyButton.disabled = true;
  } else {
    numberCardInput.style.borderColor = "";
    numberCardErrorMessage.style.display = "none";
    notifyButton.disabled = false;
  }
}

