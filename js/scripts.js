function pig_dice(player) {
  
}

//0 is player 2, 1 is player 1
function disable(player) {
  $("#roll_p" + player).prop( "disabled", true );
  $("#hold_p" + player).prop( "disabled", true );
}
function enable(player) {
  $("#roll_p" + player).prop( "disabled", false );
  $("#hold_p" + player).prop( "disabled", false );
}

$(document).ready(function() {

  var p1_score = 99;
  var p2_score = 99;

  var p1_round = 0;
  var p2_round = 0;

  //PLAYER ONE ROLL
  $("#roll_p1").click(function() {

    var roll_result = Math.floor(Math.random() * 6) + 1;

    if(roll_result === 1) {
      //disable buttons function
      disable(1);
      enable(2);
      p1_round = 0;
      $("#p1_temp").text(p1_round);
    }
    else {
      p1_round += roll_result;

      $("#p1_temp").text(p1_round);
    }
    $("#current_roll").text(roll_result);
  });

  //PLAYER ONE HOLD
  $("#hold_p1").click(function() {
    p1_score += p1_round;
    $("#p1_score").text(p1_score);
    p1_round = 0;
    $("#p1_temp").text(p1_round);
    disable(1);
    enable(2);
    if(p1_score >= 100) {
      disable(1);
      disable(2);
      $("#current_roll").text("Player 1 wins!");
      $("#again").show();
    }
  });

  //PLAYER TWO ROLL
  $("#roll_p2").click(function() {

    var roll_result = Math.floor(Math.random() * 6) + 1;

    if(roll_result === 1) {
      //disable buttons function
      disable(2);
      enable(1);
      p2_round = 0;
      $("#p2_temp").text(p2_round);
    }
    else {
      p2_round += roll_result;

      $("#p2_temp").text(p2_round);
    }
    $("#current_roll").text(roll_result);
  });

  //PLAYER TWO HOLD
  $("#hold_p2").click(function() {
    p2_score += p2_round;
    $("#p2_score").text(p2_score);
    p2_round = 0;
    $("#p2_temp").text(p2_round);
    disable(2);
    enable(1);
    if(p2_score >= 100){
      disable(1);
      disable(2);
      $("#current_roll").text("Player 2 wins!");
      $("#again").show();
    }
  });

  $("#again").click(function() {
    p1_score = 0;
    p1_round = 0;
    p2_score = 0;
    p2_round = 0;
    enable(1);
    $("#again").hide();
    $("#current_roll").text("");
  });



});
