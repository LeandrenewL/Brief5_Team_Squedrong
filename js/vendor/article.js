const url ="http://localhost:1337/api/articles?populate=*";


 alert("fichier bien creer");

 function printArticles(data){
     let main = document.getElelementById("main_grille")

     for (let article of data.data){
        let div = main_grille.appendchild(document.createElement("div"));
        div.classList.add("box1")
        let img = div.appendchild(document.createElement("img"))
     }
 }

 function getArticles(){
     fetch(url)
     .then(response => response.json())
     .then(reponse => printArticles(reponse))
     .catch(error => alert("Erreur : " + error))
 }