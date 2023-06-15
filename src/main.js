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

  $(document).ready(function() {
    $('#weatherLocation').click(function() {
      let city = $('#location').val();
      clearFields();
      let promise = WeatherService.getWeather(city);
      promise.then(function(response) {
        const body = JSON.parse(response);
        $('.showHumidity').text(`The humidity in ${city} is ${body.main.humidity}%`);
        $('.showTemp').text(`The temperature in Kelvins is ${body.main.temp} degrees.`);
        $('.visibility').text(`The visibility in meters is ${body.visibility} meters.`);
        $('.pressure').text(`The pressure in ${city} is ${body.main.pressure} hPa.`);
        $('.windSpeed').text(`The wind speed in ${city} is ${body.wind.speed} km/hr.`);
        $('.clouds').text(`The cloud situation in ${city} is ${body.clouds.all} oktas or eights.`);
      }, function(error) {
        $('.showErrors').text(`There was an error processing your request: ${error}`);
      });
    });
  });