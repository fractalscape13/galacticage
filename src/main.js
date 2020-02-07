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
    if (age > 0) {
      user.setAge(age, health);
      $(".start").hide();
      $(".result").fadeIn();
    } else {
      $("#emphasize").addClass("please");
    }
  });
  $(".planet").click(function() {
    let currentPlanet = $(this).attr("value");
    user.showInfo(currentPlanet);
    $("#outputPlanet").text(user.currentPlanet);
    $("#outputAge").text(user.currentAge);
    if (user.currentRemaining > 0) {
      $("#outputRemaining").text(user.currentRemaining);
      $("#outputRemainBox").show();
    } else {
      $("#outputPast").text(user.currentPast);
      $("#outputPastBox").show();
    }
    $("#output").fadeIn();
  });
});