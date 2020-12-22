// gérer la soumission du formulaire
const form = document.querySelector("form");


form.onsubmit = function(event) {
  event.preventDefault();
  console.log("Formulaire soumis");
  // récupération de la valeur entrée dans le champ des euros
}


function convert(amount, currency) {
  if(currency == "chf") {
    return amount * 1.06;
  }
  else{
    return amount / 1.06;
  } 
}

// récupération des inputs


// gérer la soumission du formulaire
const input_euro = document.querySelector("#euro");
const input_chf = document.querySelector("#chf");

input_euro.oninput = function() {
  console.log("input dans euro");
  input_chf.value = convert(input_euro.value, "chf");
}

input_chf.oninput = function() {
  console.log("input dans chf");
  input_euro.value = convert(input_chf.value, "euro");
}