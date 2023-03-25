var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

//Form submit event
form.addEventListener('submit', addItem);
//Delete Event
itemList.addEventListener('click', removeItem);

//Add item
function addItem(e) {
  e.preventDefault();

  //Get input value
  var newItem = document.getElementById('item').value;

  //Create new li element
  var li = document.createElement('li');

  //Add class
  li.className = 'list-group-item';
  console.log(li);

  //Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  //Create del button element
  var deleteBtn = document.createElement('button');
  var editBtn = document.createElement('edit');

  //Add classes to delete button
  deleteBtn.className = 'btn btn-danger bta-sm float-right delete';
  editBtn.className = 'btn btn-danger bta-sm float-right edit';

  //Append text node
  deleteBtn.appendChild(document.createTextNode('X'));
  editBtn.appendChild(document.createTextNode('Edit'));

  //Append button to li
  li.appendChild(deleteBtn);
  li.appendChild(editBtn);

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
