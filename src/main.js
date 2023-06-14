import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import WeatherService from './js/weather-service.js';



function clearFields() {
    $('#location').val("");
    $('.showErrors').text("");
    $('.showHumidity').text("");
    $('.showTemp').text("");
    $('.visibility').text("");
    $('.pressure').text("");
    $('.windSpeed').text("");
    $('.clouds').text("");
  }