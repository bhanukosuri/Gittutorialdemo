// EXAMINE THE DOCUMENT OBJECT

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// // document.title = 123;
// // console.log(document.title);
// console.log(document.doctype);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = "Hello";
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);
// var headerTitle = document.getElementById("header-title");
// console.log(headerTitle);
// headerTitle.textContent = "Hello";
// console.log(headerTitle);
// headerTitle.innerText = "Goodbye";
// console.log(headerTitle);
// headerTitle.innerHTML = "<h3>Hello</h3>";
//
// var items = document.getElementsByClassName("list-group-item");
// console.log(items);
// console.log(items[1]);
// items[1].textContent = "Hello 2";
// items[1].style.fontWeight = "bold";
var title = document.getElementsByClassName("title");
// console.log(title[0]);
title[0].style.fontWeight = "bold";
title[0].style.color = "green";
