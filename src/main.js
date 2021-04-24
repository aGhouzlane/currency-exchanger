import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchangeService from "./js/currencyExchangeService";

function getElements(response, amount) {
  if (response.base_code != undefined && amount > 0) {
    $('#output').text(`${amount} ${response.base_code} is ${response.conversion_rate * amount} in ${response.target_code}`);
  } else {
    $('#output').text(`Error: there was error processing you request.`);
  }
  if (response.base_code == undefined || response.target_code == undefined) {
    $('#base').text(`Error: Please enter a valid currency key.`);
  }
  if (amount < 0) {
    $('#nonegative').text(`Error: Please enter a positive number.`);
  } else if (amount == "") {
    $('#space').text(`Error: Amount input value is required before submiting.`);
  } else if (!Number(amount)) {
    $('#nan').text(`Error: Amount input supports only positive numbers.`);
  }
}

async function makeApiCall(base_code, amount, other_code) {
  const response = await CurrencyExchangeService.getCurrency(base_code, other_code);
  getElements(response, amount);
}

$(document).ready(function () {
  $('#result').click(function () {
    let base_code = $('#userInputBaseCurrency').val();
    let amount = $('#userInputAmount').val();
    let other_code = $("#userInputOtherCurrency").val();

    $('#userInputBaseCurrency').val("");
    $('#userInputAmount').val("");
    $("#userInputOtherCurrency").val("");

    // if (base_code == "" || amount == "" || other_code == "") {
    //   $('#output').text(`Error: All inputs are required before submition.`);
    // }

    makeApiCall(base_code, amount, other_code);

    $('#output').text("");
    $('#base').text("");
    $('#nonegative').text("");
    $('#space').text("");
    $('#nan').text("");


  });
});