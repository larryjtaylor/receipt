$(document).ready(function(){
  $("#shipping").submit(function(){
    var nameInput = $("input#name").val();
    var addressInput = $("input#address").val();
    var cityInput = $("input#city").val();
    var stateInput = $("input#state").val();
    var zipInput = $("input#zip").val();

    $(".name").text(nameInput);
    $(".address").text(addressInput);
    $(".city").text(cityInput);
    $(".state").text(stateInput);
    $(".zip").text(zipInput);

    $("#receipt").show();

    event.preventDefault();
  });
});
