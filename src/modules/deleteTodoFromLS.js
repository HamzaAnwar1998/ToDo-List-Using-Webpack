const deleteTodoFromLS = (el, storedTodos) => {
  if (el.classList.contains('remove-btn')) {
    const elementID = el.parentElement.parentElement.id;
    const idInNum = Number(elementID);
    const filteredTodos = storedTodos.filter((storedTodo) => storedTodo.ID !== idInNum);
    for (let i = 0; i < filteredTodos.length; i += 1) {
      filteredTodos[i].ID = filteredTodos.indexOf(filteredTodos[i]) + 1;
    }
    localStorage.setItem('Todos', JSON.stringify(filteredTodos));
  }
};

export default deleteTodoFromLS;