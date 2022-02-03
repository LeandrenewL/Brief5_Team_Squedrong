const url ="http://localhost:1337";
const urlarticle ="/api/articles?populate=*"

 alert("fichier bien creer");

 function printArticles(data){
     let main = document.getElementById("main_grille")

     for (let article of data.data){
        let div = main_grille.appendChild(document.createElement("div"));
        div.classList.add("box1")
        let img = div.appendChild(document.createElement("img"))
        img.setAttribute("src", url+article.attributes.illustration.data.attributes.formats.medium.url);
        let p = div.appendChild(document.createElement("p"))
        p.innerText = article.attributes.publishedAt;
        let h3 = div.appendChild(document.createElement("h3"))
        h3.innerText = article.attributes.title;
        let p2 = div.appendChild(document.createElement("p"))
        p2.innerText = article.attributes.resume;
        let h4 = div.appendChild(document.createElement("h4"))
        let a = h4.appendChild(document.createElement("a"))
        a.innerText="En Savoir Plus";
     }
 }

 function getArticles(){
     fetch(url+urlArticle)
     .then(response => response.json())
     .then(reponse => printArticles(reponse))
     .catch(error => alert("Erreur : " + error))
 }