const url ="http://localhost:1337";
const urlarticle ="/api/articles?populate=*"

 alert("fichier bien creer");

 function printArticles(data){
     let main = document.getElelementById("main_grille")

     for (let article of data.data){
        let div = main_grille.appendchild(document.createElement("div"));
        div.classList.add("box1")
        let img = div.appendchild(document.createElement("img"))
        img.setAttribute("src", url+article.attributes.illustation.data.attributes.formats.medium.url);
        let p = div.appendchild(document.createElement("p"))
        p.innerText("src", url+article.attributes.illustation.data.attributes.formats.medium.url);
        let h3 = div.appendchild(document.createElement("h3"))
        h3.innerText("src", url+article.attributes.illustation.data.attributes.formats.medium.url);
        let h4 = div.appendchild(document.createElement("h4"))
        let a = h4.appendchild(document.createElement("a"))
        h4.innerText("src", url+article.attributes.illustation.data.attributes.formats.medium.url);
        a.innerText("src", url+article.attributes.illustation.data.attributes.formats.medium.url);
     }
 }

 function getArticles(){
     fetch(url+urlArticle)
     .then(response => response.json())
     .then(reponse => printArticles(reponse))
     .catch(error => alert("Erreur : " + error))
 }