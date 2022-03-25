/* eslint-disable no-use-before-define */

import './styles.css';
import deleteTodoFromLS from './modules/deleteTodoFromLS.js';
import addTodoToUI from './modules/addTodoToUI.js';
import deleteTodoFromUI from './modules/deleteTodoFromUI.js';

// getting todos from LS
function getTodos() {
  let todos;
  if (localStorage.getItem('Todos') !== null) {
    todos = JSON.parse(localStorage.getItem('Todos'));
  } else {
    todos = [];
  }
  return todos;
}

// adding todo to local storage
function addTodo(todo) {
  storedTodos.push(todo);
  localStorage.setItem('Todos', JSON.stringify(storedTodos));
}

// removing todo from local storage
function removeTodo(el) {
  deleteTodoFromLS(el, storedTodos);
}

// global variable
const storedTodos = getTodos();

// Todo Class: Represents a todo
class Todo {
  constructor(ID, Description, Completed) {
    this.ID = ID;
    this.Description = Description;
    this.Completed = Completed;
  }
}

// getting todos
function displayTodos() {
  storedTodos.forEach((storedTodo) => {
    addTodoToList(storedTodo);
  });
  // handle update
  const labels = document.querySelectorAll('.label');
  labels.forEach((label) => {
    label.addEventListener('blur', () => {
      // your update logic
      const id = Number(label.parentElement.parentElement.id);
      storedTodos.forEach((storedTodo) => {
        let item;
        if (id === storedTodo.ID) {
          item = storedTodo;
          item.ID = storedTodo.ID;
          item.Completed = false;
          item.Description = label.textContent;
          storedTodo = item;
          localStorage.setItem('Todos', JSON.stringify(storedTodos));
        }
      });
    });
  });
}

// adding todo to list
function addTodoToList(storedTodo) {
  // imported
  addTodoToUI(storedTodo);
}

// clear form fields
function clearForm() {
  document.querySelector('.input').value = '';
}

// delete todo from UI
function deleteTodo(el) {
  deleteTodoFromUI(el);
}

// Event Display Books
document.addEventListener('DOMContentLoaded', displayTodos);

// Event Add a book
document.getElementById('addTodos-form').addEventListener('submit', (e) => {
  e.preventDefault();

  // getting values
  const description = document.querySelector('.input').value;
  const completed = false;
  const storedTodos = getTodos();
  const id = storedTodos.length + 1;

  // instantiate todo
  const todo = new Todo(id, description, completed);

  // adding new todo to UI
  addTodoToList(todo);

  // adding todo to LS
  addTodo(todo);

  // clearing form fields
  clearForm();
});

// Event: remove a todo
document.querySelector('.todo-container').addEventListener('click', (e) => {
  deleteTodo(e.target);
  removeTodo(e.target);
});