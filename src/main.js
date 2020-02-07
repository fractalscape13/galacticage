import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Person } from './person';

$(document).ready(function() {
  let user;
  $("#form").submit(function() {
    event.preventDefault();
    user = new Person();
    let age = $("input#age").val();
    let health = $("#health").val();
    user.setAge(age, health);
    $(".start").hide();
    $(".result").fadeIn();
    console.log(user);
  });
});