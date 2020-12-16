(function(a) {
    console.log("dans ma fonction anonyme");
    var i = 12;
    console.log(a);
})("Hello World"); // les () appelent la fonction anonyme, possibilité de mettre des arguments
//console.log(i);