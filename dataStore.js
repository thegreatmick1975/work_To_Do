let todoList = [];

// create operation
function addTodoItem(todoItem) {
  todoItem.dateAdded = new Date().toLocaleString();
  todoList.push(todoItem);
}

// read operation
function getTodoItems() {
  return todoList;
}

// update operation
function markTodoItemComplete(id) {
  for (let i = 0; i < todoList.length; i++) {
    if (todoList[i].id === id) {
      todoList[i].dateCompleted = new Date().toLocaleString();
      todoList[i].completed = true;
      break;
    }
  }
}

// delete operation
function deleteTodoItem(id) {
  for (let i = 0; i < todoList.length; i++) {
    if (todoList[i].id === id) {
      todoList.splice(i, 1);
      break;
    }
  }
}

