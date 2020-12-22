/**
 * Fonction constructeur de Card
 * @param {string} question 
 * @param {string} answrer 
 */
function Card(question, answer) {
    // Propriétés
    this.question = question;
    this.answer = answer;
    this.toto = "toto";
    //Propriété qui a pour type "function", on l'appel alors "Méthode"
    /*this.dumpQuestionAnswer = function() {
        console.log(`Question: ${this.question} - Réponse : ${this.answer}`);
    }
    this.methodeTest = () => {
        console.log("this : ", this);
    }*/

}
// Ajout d'une méthode au prototype de la fonction constructeur Card
Card.prototype.dumpQuestionAnswer = () => {
    console.log(`Question: ${this.question} - Réponse : ${this.answer}`);
}

Card.prototype.salut = "salut";

// Quand on utilise "new", c'est que l'on crée une instance
const c1 = new Card ("Nom de l'inventeur du web ?", "Tim Berners-Lee")
const c2 = new Card ("Iventeur du JS ?", "Brandan Eich");

// Atteindre les propriétés
console.log(c1.question);
console.log(c1.answer);
// Appel des méthodes
c1.dumpQuestionAnswer();
console.log("c1 : ", c1);
console.log("salut : ", c1.salut);

// objet littéral - syntaxe json
/*const c2 = {
    "question": "Iventeur du JS ?",
    "answer": "Brandan Eich",
    "DumpQuestionAnswer": () => {
        console.log("this : ", this);
        console.log(`Question : ${this.question} - Réponse : ${this.answer}`);
    }
}
// Atteindre les propriétés
console.log(c2.question);
console.log(c2.answer);
// Appel des méthodes
c2.dumpQuestionAnswer();
*/