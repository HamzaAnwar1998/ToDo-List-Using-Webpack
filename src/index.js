/* eslint-disable max-classes-per-file */
/* eslint-disable no-use-before-define */

import './styles.css';
import { deleteTodoFromLS } from './modules/deleteTodoFromLS.js';
import { addTodoToUI } from './modules/addTodoToUI.js';
import { deleteTodoFromUI } from './modules/deleteTodoFromUI.js';

class Store {
  // getting todos from LS
  static getTodos() {
    let todos;
    if (localStorage.getItem('Todos') !== null) {
      todos = JSON.parse(localStorage.getItem('Todos'));
    } else {
      todos = [];
    }
    return todos;
  }

  // adding todo to local storage
  static addTodo(todo) {
    storedTodos.push(todo);
    localStorage.setItem('Todos', JSON.stringify(storedTodos));
  }

  // removing todo from local storage
  static removeTodo(el) {
    deleteTodoFromLS(el, storedTodos);
  }
}

// global variable
const storedTodos = Store.getTodos();

// Todo Class: Represents a todo
class Todo {
  constructor(ID, Description, Completed) {
    this.ID = ID;
    this.Description = Description;
    this.Completed = Completed;
  }
}

// UI Class: handles UI tasks
class UI {
  // getting todos
  static displayTodos() {
    storedTodos.forEach((storedTodo) => {
      UI.addTodoToList(storedTodo);
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
  static addTodoToList(storedTodo) {
    // imported
    addTodoToUI(storedTodo);
  }

  // clear form fields
  static clearForm() {
    document.querySelector('.input').value = '';
  }

  // delete todo from UI
  static deleteTodo(el) {
    deleteTodoFromUI(el);
  }
}

// Event Display Books
document.addEventListener('DOMContentLoaded', UI.displayTodos);

// Event Add a book
document.getElementById('addTodos-form').addEventListener('submit', (e) => {
  e.preventDefault();

  // getting values
  const description = document.querySelector('.input').value;
  const completed = false;
  const storedTodos = Store.getTodos();
  const id = storedTodos.length + 1;

  // instantiate todo
  const todo = new Todo(id, description, completed);

  // adding new todo to UI
  UI.addTodoToList(todo);

  // adding todo to LS
  Store.addTodo(todo);

  // clearing form fields
  UI.clearForm();
});

// Event: remove a todo
document.querySelector('.todo-container').addEventListener('click', (e) => {
  UI.deleteTodo(e.target);
  Store.removeTodo(e.target);
});