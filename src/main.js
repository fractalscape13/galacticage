import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Person } from './person';

$(document).ready(function() {
  let user;
  //click function to submit age & level of health
  $("#form").submit(function() {
    event.preventDefault();
    let age = $("input#age").val();
    user = new Person(age);
    let health = $("#health").val();
    if (age > 0) {
      user.setGalacticAges(health);
      $(".start").hide();
      $(".result").fadeIn();
    } else {
      $("#emphasize").addClass("please");
    }
  });
  //click function to see information for each planet
  $(".planet").click(function() {
    let currentPlanet = $(this).attr("value");
    $("#outputPlanet").text(currentPlanet);
    $("#outputAge").text(user['age'+currentPlanet]);
    if (user['remaining'+currentPlanet] > 0) {
      $("#outputRemaining").text(user['remaining'+currentPlanet]);
      $("#outputRemainBox").show();
    } else {
      $("#outputPast").text(user['past'+currentPlanet]);
      $("#outputPastBox").show();
    }
    $("#output").fadeIn();
  });
});