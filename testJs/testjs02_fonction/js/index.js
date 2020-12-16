/**
 * Fonction qui attend en paramètre un nombre positif
 * et qui renvoie le périmètre (nombre à virgule positif)
 * le mot clé function déclenche du "hoisting" c'est comme si la
 * fonction était déclarée en haut du fichier.
 * @param {number} rayon 
 * @return number
 */

function calculPerimetre(rayon) { // rayon est le paramètre attendu par la fonction
    return 2 * 3,14 * rayon;
}

// Appel de la fonction
let perimetre3 = calculPerimetre(5); // le nombre est la valeur de l'argument

console.log("Périmetre pour un rayon de 3 :" , perimetre3);