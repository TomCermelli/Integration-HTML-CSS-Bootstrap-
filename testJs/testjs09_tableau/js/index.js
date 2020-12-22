const fruits = [`banane`, `fraise`];

// ajout d'un élément en fin de tableau
fruits.push("orange");
console.log("fruit : ", fruits);

//supression du derneir élément
fruits.pop();
console.log("fruit : ", fruits);

// la propriété length qui permet d'obtenir la taille du tableau
console.log("taille du tableau : ", fruits.length);

//Parcours du tableau
// ancienne méthode
for (let i = 0; i < fruits.length; i++) {
    console.log (`fruit pour l'index ${i} : `, fruits[i]);
}

// forEach est une "higher order function" car elle attends une fonction en paramètre
fruits.forEach(function(elt, index) {
    console.log (`element pour l'index ${index} :`, elt)
    //console.log(`tableau : `, table); // pas obligatoire, ca peut arriver mais pas la
    if (typeof(elt) == "function") {
        elt();
    }
});

for(elt of fruits) {
    console.log ('element (avec for of):', elt);
}

// Création d'un nouvea tableau à partir d'un tableau existant
const items_fruits = fruits.map((fruit) => `<li>${fruit}</li>`);
console.log("items_fruit", items_fruits);

    