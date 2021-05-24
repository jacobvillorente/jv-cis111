"use strict.";

function add(){
  //console.log("button clicked");

  if (document.getElementById("feet").value == "" || document.getElementById("inches").value == "" || document.getElementById("weight").value == "") {
    window.alert("missing data");
  }

else {
  var feet =
  parseInt(document.getElementById("feet").value);
  console.log("feet is " + feet);

  var inches =
  parseInt(document.getElementById("inches").value);
  console.log("inches is " + inches);

  var weight =
  parseInt(document.getElementById("weight").value);
  console.log("weight is " + weight);

  var height = (feet * 12) + inches

  var bmi = 703 * (weight / (height * height));
  console.log("bmi is " + bmi);
  document.getElementById("bmi").innerHTML = bmi.toFixed(1);

  }
}
function reset () {
  document.getElementById("feet").value = "";
  document.getElementById("inches").value = "";
  document.getElementById("weight").value = "";
  document.getElementById("bmi").innerHTML = "";

}
