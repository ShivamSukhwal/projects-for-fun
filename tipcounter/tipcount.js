var button = document.getElementById("go");

button.onclick = function() {
  var cost = parseInt(document.getElementById("cost").value);
  var tip = parseInt(document.getElementById("tip").value);

  var result = cost / tip;
  var total = cost + result;
  alert("Tip will be " + result + ". Total cost: " + total);
};
