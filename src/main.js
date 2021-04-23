import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchangeService from "./js/currencyExchangeService";

function getElements(response, amount, other_code) {
  if (response) {
    $('#output').text(`${amount} ${response.base_code} is ${response.conversion_rate * amount} in ${other_code}`);
  } else {
    $('#showErrors').text(`There was an error: ${response}`);
  }
}

async function makeApiCall(base_code, amount, other_code) {
  const response = await CurrencyExchangeService.getCurrency(base_code, other_code);
  getElements(response, amount, other_code);
}

$(document).ready(function () {
  $('#result').click(function () {
    let base_code = $('#userInputBaseCurrency').val();
    let amount = $('#userInputAmount').val();
    let other_code = $("#userInputOtherCurrency").val();
    makeApiCall(base_code, amount, other_code);
  });
});