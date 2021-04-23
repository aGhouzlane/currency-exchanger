import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchangeService from "./js/currencyExchangeService";


function getElements(response) {
  if (response) {
    $('#output').text(`The ${response.base_code} currency is in EURO:  ${response.conversion_rates.EUR}`);
  } else {
    $('#showErrors').text(`There was an error: ${response}`);
  }
}

async function makeApiCall() {
  const response = await CurrencyExchangeService.getCurrency();
  getElements(response);
}

$(document).ready(function () {
  $('#result').click(function () {

    //let base_code = $('#userInput').val();
    // clearFields();
    makeApiCall();
  });
});