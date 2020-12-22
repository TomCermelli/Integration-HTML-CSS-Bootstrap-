class Person {
    constructor(nom, prenom) {
        this.prenom = prenom;
        this.nom = nom;

    }
    introduceMyself() {
        console.log (`Bonjour, je m'apelle ${this.prenom} ${this.nom}`);
    }
}

class Enseignant extends Person {
    constructor(nom, prenom, matiere) {
        super(nom, prenom); // Il faut rappeler les propriété parents 
        this.matiere = matiere; // Une fois rappeller on peut rajouter nos nouvelles propriétés
    }
    introduceMyself() {
        super.introduceMyself();
        console.log (`... et je suis un enseignant`)
    }
    enseigne() {
        console.log(`J'enseigne ${this.matiere}`);
    }

}

const bob = new Person (`Dylan`, `Bob`);
bob.introduceMyself();

const jose = new Enseignant (`Bové`, `José`, `l'art de faire du fromage`);
jose.introduceMyself();
jose.enseigne();
    