const url ="http://localhost:1337";
const urlArticle = "/api/articles?populate=*";


 function getArticles(){
     fetch(url +urlArticle)
     .then(response => response.json())
     .then(response => printArticles(response))
        // .catch(error => alert("Erreur : " + error));
     }
     function printArticles(data){
         let grille =document.getElementById("grille-main");
         for (let article of data.data){
          let div = grille.appendChild(document.createElement("div")); 
          div.classList.add("box1") 
          let img = div.appendChild(document.createElement("img"));
          img.setAttribute("src",url+article.attributes.image_squedrong.data.attributes.formats.medium.url);
          let p = div.appendChild(document.createElement("p"));
          p.innerText = article.attributes.publishedAt;
          let h3 = div.appendChild(document.createElement("h3"));
          h3.innerTest = article.attributes.titre;
          let p2 = div.appendChild(document.createElement("p"));
          p2.innerText = article.attributes.resume;
          let h4 = div.appendChild(document.createElement("h4"));
          let a = h4.appendChild(document.createElement("a"));
          a.setAttribute("href", "article.html");
          a.innertext = ("en savoir plus");
         }
 
     }
     getArticles();