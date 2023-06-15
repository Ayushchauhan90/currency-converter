var from = document.getElementById("from");
var to = document.getElementById("to");
var amount = document.getElementById("amount");
var calculate = document.getElementById("calculate");
var result = document.getElementsByClassName("result")[0]; // Access the first element in the collection
calculate.addEventListener("click", handleclick); // add the onclick event on calculate button

function handleclick() {
  var toname = to.options[to.selectedIndex].getAttribute("name"); //get the toselect country name
  var fromname = from.options[from.selectedIndex].getAttribute("name");// get the from select country name
  var from1 = from.options[from.selectedIndex].value;
  var to2 = to.options[to.selectedIndex].value;
  var amount2 = amount.value;

  fetch(`https://api.exchangerate-api.com/v4/latest/${from1}`)  //get the all country currency price from selected country
    .then((res) => res.json())
    .then((res) => {
      var data1 = res.rates[to2];
      var output = data1 * amount2;
// amount section conditation 
      if (amount2 === "") {
        $(".result").text("**Enter a number").addClass("before-result");
      } else if (output <= 999) {
        $(".result")
          .text(`${amount2} ${fromname} = ${output.toFixed(2)} ${toname}`)
          .addClass("after-result");
      } else if (output >= 1000 && output <= 999999) {
        $(".result")
          .text(
            `${amount2} ${fromname} = ${(output / 1000).toFixed(2)}K ${toname}`
          )
          .addClass("after-result");
      } else if (output >= 1000000 && output <= 999999999) {
        $(".result")
          .text(
            `${amount2} ${fromname} = ${(output / 1000000).toFixed(2)}M ${toname}`
          )
          .addClass("after-result");
      } else if (output >= 1000000000 && output <= 999999999999) {
        $(".result")
          .text(
            `${amount2} ${fromname} = ${(output / 1000000000).toFixed(2)}B ${toname}`
          )
          .addClass("after-result");
      }
    });
}







