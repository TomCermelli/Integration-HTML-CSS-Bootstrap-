// Permet de stocker dans la variable h1 l'élément 
//du DOM qui a pour identité h1
const h1 = document.getElementById("h1");
console.log("h1 : ", h1);

// Création d'un élément du DOM
const h2 = document.createElement("h2");
console.log("h2 : ", h2);

// ajouter l'élément dans le DOM : ici ajout de h2 à la fin de body
window.document.body.appendChild(h2);

// Ajouter du texte à un élément du DOM
h2.textContent = "Titre de niveau 2";

// Créer une fonction qui attend 3 param
// - nature de l'élément du dom (ex:section)
// - texte contenu dans l'élément du DOM
// - parent de l'élement du DOM
// Cette fonction permet de crée un élément du DOM et lui ajouter du texte
// et le placer dans un élément parent

function addToDom (tagName, text, parentTEl) {
    let element = document.createElement(tagName); /*on crée un élément = au parametre 1*/ 
    element.textContent = text; /*On lui met du text = au parametre 2*/ 
    parentTEl.appendChild(element); /*On le met à la fin du parent = parametre 3*/ 
}
let bonjour = document.getElementById("test2");
addToDom("p", "ajout du text", bonjour);


/*Vers raccourcie*/
createAddDomElt(
    "h3", 
    "Titre de niveau 3fdsfqsfds", 
    document.body, 
    {"id": "myh3", "class": "primary"});

/**
 * 
 * @param {string} tagname 
 * @param {string} text 
 * @param {DOM Element} parentElt 
 * @param {object} attributes 
 */
function createAddDomElt (tagname, text, parentElt = document.body, attributes) {
    let element = document.createElement(tagname);
    if(text) element.textContent = text;
    parentElt.appendChild(element);
    // Parcours d'un objet littéral
    for (let key in attributes) { //in = tableau d'objet 
        element.setAttribute (key, attributes[key])
    }


    const list = document.querySelectorAll("ul > li");
    console.log("list", lis);
}
