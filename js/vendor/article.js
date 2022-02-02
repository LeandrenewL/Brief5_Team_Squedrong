const url ="http://localhost:1337/api/articles?populate=*";


 alert("fichier bien creer");

 function getArticles(){
     fetch(url)
     .then(response => response.json())
     .then(reponse => printArticles(reponse))
     .catch(error => alert("Erreur : " + error))
 }