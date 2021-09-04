function Click() {
  var amountCorrect = 0;
  for (var i = 1; i <= 45; i++) {
    var radios = document.getElementsByName('group' + i);
    for (var j = 0; j < radios.length; j++) {
      var radio = radios[j];
      if (radio.value == "correct" && radio.checked) {
        amountCorrect++;
      }
    }
  }
  if (amountCorrect >= 0) {
    alert("Score= " + amountCorrect + "/10");
  }
}