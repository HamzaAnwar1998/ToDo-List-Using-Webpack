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
  static removeTodo(ID) {
    const storedTodos = Store.getTodos();
    // imported
    deleteTodoFromLS(ID, storedTodos);
  }
}

// global variable
const storedTodos = Store.getTodos();

// Todo Class: Represents a todo
class Todo {
  constructor(Description, Completed) {
    this.Description = Description;
    this.Completed = Completed;
  }
}

// UI Class: handles UI tasks
class UI {
  // getting todos
  static displayTodos() {
    storedTodos.forEach((storedTodo, index) => {
      const id = index + 1;
      UI.addTodoToList(storedTodo, id);
    });
  }

  // adding todo to list
  static addTodoToList(storedTodo, index) {
    // imported
    addTodoToUI(storedTodo, index);
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

  // getting input values
  const description = document.querySelector('.input').value;
  const completed = false;

  // instantiate todo
  const todo = new Todo(description, completed);

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
  Store.removeTodo(e.target.id);
});