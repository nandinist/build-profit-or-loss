var initialPrice = document.querySelector("#initial-price");
var stocksQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var submit = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box");

submit.addEventListener("click", submitHandler);

function submitHandler() {
  var intialValue = Number(initialPrice.value);
  var quantityOfStock = Number(stocksQuantity.value);
  var curr = Number(currentPrice.value);

  ProfitAndLoss(intialValue, quantityOfStock, curr);
}

function ProfitAndLoss(initialVal, quantity, currPrice) {
  if (initialVal > currPrice) {
    var loss = (initialVal - currPrice) * quantity;
    var lossPercent = (loss / initialVal) * 100;

    showOutput(`Loss: ${loss} and Loss Percent: ${lossPercent}%`);
  } else if (currPrice > initialVal) {
    var profit = (currPrice - initialVal) * quantity;
    var profitPercent = (profit / initialVal) * 100;

    showOutput(`Profit: ${profit} and Gain Percent: ${profitPercent}%`);
  } else {
    showOutput(`No pain no gain and no gain no pain`);
  }
}

function showOutput(message) {
  outputBox.innerHTML = message;
}
