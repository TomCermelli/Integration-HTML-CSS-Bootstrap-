/**
 * Class  Card
 * @param {string} question 
 * @param {string} answrer 
 */
class Card {
    constructor(question, answer){
        //propriétés
        this.question = question;
        this.answer = answer;
    }
     //Ajout d'une méthode
    dumpQuestionAnswer = () => {
        console.log(`Question : ${this.question} - Réponse : ${this.answer}`);

    }
}
const c1 = new Card (`Nom de l'inventeur de js`, `Eich`);
console.log(`c1 : `, c1);
    