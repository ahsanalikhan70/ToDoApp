

var items = JSON.parse(localStorage.getItem("todo-list")) || [];
function addTodo() {
  var inputBox = document.querySelector("#todo-input");
  var item = inputBox.value;

  
  if (item === ""){
    Swal.fire()
    Swal.fire({
      icon: 'error',
      title: 'Title Fiels Is Empty',
      text: 'Name Your Title First',
    });
    return (document.getElementById("list").innerHTML =
      "You need to put in a number");
    }
  items.push({
    value: item,
  });

  localStorage.setItem("todo-list", JSON.stringify(items));
  
  listItems();
  Swal.fire()
  Swal.fire({
    icon: 'success',
    title: 'Todo Added',
    text: '',
  });
  inputBox.value = "";
}

function deleteItem(index) {
  Swal.fire()
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
    
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
      items.splice(index, 1);
  localStorage.setItem("todo-list", JSON.stringify(items));
  listItems();
    }
  })
}

function listItems() {
  var list = "";
  for (var i = 0; i < items.length; i++) {
    list += "<li>";
    list += items[i].value + " ";
    list +=
      "<span onclick='deleteItem(" +
      i +
      ")'><button class='remove'>Remove</button></span></li>";
  }
  document.querySelector("#todo-list").innerHTML = list;
}

(function () {
  listItems();
})();