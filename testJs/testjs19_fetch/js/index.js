function getToken() {
  return fetch("https://www.coopernet.fr/rest/session/token/")
    .then(function (response) {
      if (response.status !== 200) {
        throw new Error("Le serveur n'a pas rép correctement");
      }
      else {
        return response.text();
      }
    })
    .then(function (data) {
      console.log("Token récupéré : ", data);
      return data;
    })
    .catch(error => {
      console.log("Erreur attrapée :", error);
    })
}

async function getTokenUser() {
  try {
    const token = await getToken();

    // const user = await getUser(token);
  }
  catch (error) {
    console.log("Erreur attrapée : ", error);
  }
}
getTokenUser();