/*
* Faire en sorte que le click sur h1
* cache ou fasse apparaitre le paragraphe
*/

/*
*
*/ 
const h1 = document.querySelector("h1");


//h1.onclick = function() {
  //  element =  document.getElementById("pChange");
    //console.log("classList : ", element.classList);
    //if(element.classList.length == 0) {
      //element.classList.toggle("disparaitre");
    //}
    //else {
      //  element.classList.toggle("disparaitre"); /*vu qu'il est apparut, il faut le toggle en false*/ 
       // element.classList.toggle("apparaitre");
    //}
//}


h1.onclick = function() {
    element =  document.getElementById("pChange");
    console.log("classList : ", element.classList);
    element.classList.toggle("disparaitre");
}

//const p = document.querySelector("#pChange");
//h1.onclick = function () {
    //const visibility = p.style.visibility ;
    //console.log("vsibility : ", visibility);
    //if (!visibility || visibility == "visible") p.style.visibility = "hidden";
    //else {
      //  p.style.visibility = "visible";
    //}
//}