function getToken() {
  return new Promise(function (resolve, reject) {
    if (Math.random() > 0.5) {
      resolve("Xd1586655zeEszzs");
    }
    else {
      reject("Erreur dans l'obtention du token");
    }
  });
}

function getUser() {
  return new Promise(function (resolve, reject) {
    if (Math.random() > 0.5) {
      resolve({ "login": "bob", "uid": "158" });
    }
    else {
      reject("Erreur dans l'obtention des informations concernant l'utilisateur");
    }
  });
}

//getToken()
  //.then(function (token) {
    //console.log("Cas favorable, token : ", token);
   // return getUser();// chainage car getUser renvoie également une promesse
  //})
  //.then(function (user) {
   // console.log("Cas favorable, user : ", user);
  //})
  //.catch(function (error) {
 //   console.error(error);
//  });


async function getTokenUser() { // async prévient que l'on va manipuler des fonctions asynchrone
  try {
    // récupération du token
    const token = await getToken();
    console.log("Cas favorable, token : ", token);
    // récupération des infos de l'utilisateur si la récupération s'est bien passé
    const user = await getUser();
    console.log("Cas favorable, user : ", user);
  }
  catch (error) {
    console.log("Erreur attrapée : ", error);
  }
}
getTokenUser();