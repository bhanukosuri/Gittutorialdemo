var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//Form submit event
form.addEventListener('submit', addItem);
//Delete Event
itemList.addEventListener('click', removeItem);
//Filter Event
filter.addEventListener('keyup', filterItems);

//Add item
function addItem(e) {
  e.preventDefault();

  //Get input value
  var newItem = document.getElementById('item').value;
  var newItemDescription = document.getElementById('description').value;

  //Create new li element
  var li = document.createElement('li');

  //Add class
  li.className = 'list-group-item';
  console.log(li);

  //Add text node with input value
  li.appendChild(document.createTextNode(newItem + ' ' + newItemDescription));

  //Create del button element
  var editBtn = document.createElement('edit');
  var deleteBtn = document.createElement('button');

  //Add classes to delete button
  editBtn.className = 'btn btn-danger bta-sm float-right edit';
  deleteBtn.className = 'btn btn-danger bta-sm float-right delete';

  //Append text node
  editBtn.appendChild(document.createTextNode(' Edit'));
  deleteBtn.appendChild(document.createTextNode('X'));

  //Append button to li
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);

  //Append li to list
  itemList.appendChild(li);
  //   itemList.appendChild(li);
}

//Remove item
function removeItem(e) {
  if (e.target.classList.contains('delete')) {
    if (confirm('Are you sure?')) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}
// Filter Items
function filterItems(e) {
  // Convert text to lowercase
  var text = e.target.value.toLowerCase();
  //Get list
  var items = itemList.getElementsByTagName('li');
  //Convert to an array
  Array.from(items).forEach(function (item) {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
