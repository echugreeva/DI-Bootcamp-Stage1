
let allBooks = [
{   title: "Harry Potter",
    author: "J K Rowling",
    image: "https://static.wikia.nocookie.net/harrypotter/images/4/4e/Harry_potter..jpg/revision/latest?cb=20160103201623",
    alreadyRead: true


},
{
    title: "His Dark Materials",
    author: "Philip Pullman",
    image: "https://upload.wikimedia.org/wikipedia/en/e/e3/HisDarkMaterials1stEdition.jpg",
    alreadyRead: false
}


];

// Requirements : All the instructions below need to be coded in the js file:
// Using the DOM, render the books inside an HTML table (the HTML table must be added to the <div> created in part 1).
// For each book :
// You have to display the book’s title and the book’s author.
// Example: HarryPotter written by JKRolling.
// The width of the image has to be set to 100px.
// If the book is already read. Set the color of the book’s details to red.

let div = document.querySelector("div");
let table = document.createElement("table");


for (i=0;i<allBooks.length; i++) {
let tr = document.createElement("tr");
let content = document.createTextNode(`${allBooks[i]['title']} written by ${allBooks[i]['author']}`);    
let img = document.createElement('img');
img.src = allBooks[i]['image'];
img.style.width = "100px";
div.appendChild(table);
table.appendChild(tr);
tr.appendChild(content);
tr.appendChild(img);

if(allBooks[i]['alreadyRead']) {
    tr.style.color = "red";
}
}