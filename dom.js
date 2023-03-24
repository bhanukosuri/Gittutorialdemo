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
// items[1].style.backgroundColor = "yellow";

// for (var i = 0; i < items.length; i++) {
//   items[i].style.backgroundColor = "#f4f4f4";
// }
// var title = document.getElementsByClassName("title");
// console.log(title[0]);
// title[0].style.fontWeight = "bold";
// title[0].style.color = "green";

// var items = document.getElementsByClassName("list-group-item");
// console.log(items);
// items[2].style.backgroundColor = "green";
// for (var i = 0; i < items.length; i++) {
//   items[i].style.fontWeight = "bold";
// }
// items.style.fontWeight = "bold";
// var li = document.getElementsByTagName("li");
// console.log(li);

// QUERYSELECTOR //
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World';

// var submit = document.querySelector('input[type = "submit"]');
// submit.value = 'SEND';

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor = 'green';

// var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.display = 'none';

//QUERY SELECTOR ALL//
// var titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');

// for (var i = 0; i < odd.length; i++) {
//   odd[i].style.backgroundColor = '#f4f4f4';
//   even[i].style.backgroundColor = '#ccc';
// }

// var listItem = document.querySelectorAll('li');
// // console.log(listItem);
// listItem[1].style.color = 'green';

// var odd = document.querySelectorAll('li:nth-child(odd');
// for (var i = 0; i < odd.length; i++) {
//   odd[i].style.backgroundColor = 'green';
// }

// TRAVERSING THE DOM //
// var itemList = document.querySelector('#items');
// Parent node
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

// parent Element
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

// Child Elments
// console.log(itemList.childNodes);
// console.log(itemList.children);
// itemList.children[1].style.backgroundColor = 'yellow';

// //FirstChild
// console.log(itemList.firstChild);
// //First Element Child
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';

// Last Child
// console.log(itemList.lastChild);
//Last Element Child
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello last';

//nextSibling
// console.log(itemList.nextSibling);
//nextElementSibling
// console.log(itemList.nextElementSibling);

//previousSibling
// console.log(itemList.previousSibling);
//previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

// createElement

// //create a div
// var newDiv = document.createElement('div');

// //Add class
// newDiv.className = 'hello';

// //Add id
// newDiv.id = 'hello1';

// //Add attr
// newDiv.setAttribute('title', 'Hello Div');

// // Create text node
// var newDivText = document.createTextNode('Hello World');

// // Add text to Div
// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');

// console.log(newDiv);

// newDiv.style.fontSize = '30px';

// container.insertBefore(newDiv, h1);

var newDiv = document.createElement('div');
var newDivText = document.createTextNode('HEllo');
newDiv.appendChild(newDivText);
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
// console.log(newDiv);
// newDiv.style.fontSize = '30px';
container.insertBefore(newDiv, h1);

var itemList = document.querySelector('#items');
helloworldlielement = '<li class="list-group-item">HEllo</li>';
itemList.innerHTML = helloworldlielement + itemList.innerHTML;
