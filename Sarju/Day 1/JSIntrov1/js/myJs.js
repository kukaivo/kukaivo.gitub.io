//alert("Welcome to JS");
//
//console.log('Welcome to JS1');
//
//var num1='John';
//
//var num2='Smith';
//
//result=num1+num2;
//
//console.log(result);
//
//document.write('John Smith');
//document.write(result);


console.dir(document);

//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//document.title="DOM in Javascript";
//
//console.log(document.body);

//to access an element in array and change its contents
//document.all[41].textContent="Welcome to Javascript";

//Difference between text-content and innerHTML
var pageheader = document.getElementById("header");
pageheader.textContent = "New Header";
//pageheader.innerHTML = "<h5>Header innerHTML</h5>";


//Difference between text-content and innerText
console.log(pageheader.textContent);
//console.log(pageheader.innerText);

pageheader.innerHTML = "<h5>Header innerHTML</h5>";
//console.log(pageheader.textContent);

pageheader.style.borderBottom = '2px solid red';

//Arrays and For Loop
var items = document.getElementsByClassName("list-group-item");
items[0].textContent = 'HTML';
items[1].textContent = 'CSS';
items[2].textContent = 'Javascript';
items[3].textContent = 'C#';

for (var i = 10; i > 0; i--) {
    console.log(i);
}


for (var i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = "yellow";
}

//Accessing elements by Tag name
var lists = document.getElementsByTagName('li');
lists[7].textContent = "OOP programming";


for (var i = 0; i < lists.length; i++) {
    lists[i].style.fontWeight = 'bold';
    lists[i].style.backgroundColor = 'grey';
}

//querySelector using an id
var header = document.querySelector("#main-header");
header.style.borderBottom = '4px solid blue';



//querySelector using a class
var header = document.querySelectorAll(".list-group-item");
for (var i = 0; i < header.length; i++) {

    header[i].style.borderBottom = '4px solid blue';;
}