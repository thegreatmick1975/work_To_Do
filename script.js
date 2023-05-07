const todoForm = document.querySelector('.todo-form');
const todoInput = document.querySelector('.todo-input');
const todoList = document.querySelector('.todo-list');

let todos = [];

function addTodo() {
  const todoText = todoInput.value.trim();
  if (todoText !== '') {
    const todo = {
      id: Date.now(),
      text: todoText,
      completed: false,
      dateAdded: new Date(),
      dateCompleted: null
    };
    todos.push(todo);
    displayTodos();
    todoInput.value = '';
  }
}

function displayTodos() {
  todoList.innerHTML = '';
  todos.forEach(todo => {
    const todoEl = document.createElement('div');
    todoEl.classList.add('todo-item');

    const todoLeft = document.createElement('div');
    todoLeft.classList.add('todo-item-left');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;
    checkbox.addEventListener('change', () => {
      todo.completed = checkbox.checked;
      todo.dateCompleted = checkbox.checked ? new Date() : null;
      displayTodos();
    });

    const todoTask = document.createElement('div');
    todoTask.classList.add('todo-task');
    todoTask.textContent = todo.text;

    todoLeft.appendChild(checkbox);
    todoLeft.appendChild(todoTask);
    todoEl.appendChild(todoLeft);

    const todoRight = document.createElement('div');
    todoRight.classList.add('todo-item-right');

    const dateAdded = document.createElement('div');
    dateAdded.classList.add('todo-date-added');
    dateAdded.textContent = todo.dateAdded.toLocaleString();

    const dateCompleted = document.createElement('div');
    dateCompleted.classList.add('todo-date-completed');
    dateCompleted.textContent = todo.dateCompleted ? todo.dateCompleted.toLocaleString() : '';

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('todo-delete-btn');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
      deleteTodoById(todo.id);
    });

    todoRight.appendChild(dateAdded);
    todoRight.appendChild(dateCompleted);
    todoRight.appendChild(deleteBtn);
    todoEl.appendChild(todoRight);

    todoList.appendChild(todoEl);
  });
}

function deleteTodoById(id) {
  todos = todos.filter(todo => todo.id !== id);
  displayTodos();
}

function clearAllTodos() {
  todos = [];
  displayTodos();
}

todoForm.addEventListener('submit', event => {
  event.preventDefault();
  addTodo();
});

const clearBtn = document.querySelector('.clear-btn');
clearBtn.addEventListener('click', () => {
  clearAllTodos();
});

displayTodos();
