console.dir(document);


var news = document.querySelectorAll(".news");
for (var i = 0; i < news.length; i++) {

    news[i].style.borderBottom = '4px solid blue';
}

var articles = document.getElementsByTagName("article");
for (var i = 0; i < articles.length; i++) {

//        console.log( articles[i].getElementsByTagName("a"));
       news[i].style.borderBottom = '4px solid red';

}


   var images = document.getElementsByTagName("article");
    for (var i = 0; i < articles.length; i++) {

//        console.log( articles[i].getElementsByTagName("a"));
           news[i].style.borderBottom = '4px solid red';
        
    }

