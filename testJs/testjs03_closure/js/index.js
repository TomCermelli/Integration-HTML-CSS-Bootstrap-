let i = 1;
function a() {
    let j = 2;
    function b() {
        let l= 4;
        console.log("j :", j);
    }
    return b;
}

console.log("i :", i);
//console.log("j :", j);

const maFonction = a();
// bien que l'on soit dans le contexte global, 
// on a accès à j qui est dans le contexte de a()
// grâce au mécanisme des closures
maFonction();