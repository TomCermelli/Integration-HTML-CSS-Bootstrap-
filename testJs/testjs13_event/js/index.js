// Récupération de l'élément du DOM qui correspond à la balise h1

const h1 = document.querySelector("#h1");

//affection d'une fonction (gestionnaire d'évenèment - event handler - event listener)
// à la propriété onclick
h1.onclick = function(event) {
    console.log("Click sur h1");
    console.log("event target : ", event.target);
    console.log("event preventDefault : ", event.preventDefault);
}
console.log("propriété onclick de h1 ", h1.onclick);

// Exercice
// Dans le code js (fichier testjs13-event.js)  ajouter un "event listener" (fonction) pour l'événement 
// click sur le bouton d'identité "add-p"
// Cette fonction va ajouter dans la section d'id "paragraphes" des paragraphes
// qui auront pour texte : "Lorem ipsum"


//const btn = document.querySelector("#add-p");
//btn.onclick = function() {
  //  const section = document.querySelector("#paragraphes");
    //section.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

//}


// on récupère le dom de la source de l'évent
const section = document.querySelector("#paragraphes");
const btn2 = document.querySelector("#add-p");


// Ajout d'un event listener
btn2.onclick = function () {
    console.log("click sur le bouton add");
    createAddDomElt("p", "Lorem ipsum", section);

}

function createAddDomElt (tagname, text, parentElt = document.body, attributes) {
    let element = document.createElement(tagname);
    if(text) element.textContent = text;
    parentElt.appendChild(element);
    for (let key in attributes) { //in = tableau d'objet 
        element.setAttribute (key, attributes[key])
    }
}