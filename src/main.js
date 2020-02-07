import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
// import { Person } from './person';

$(document).ready(function() {
  $("#form").submit(function() {
    event.preventDefault();
    $(".start").hide();
    $(".result").fadeIn();
  });
});