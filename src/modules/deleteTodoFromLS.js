const deleteTodoFromLS = (ID, storedTodos) => {
  const idInNum = Number(ID);
  storedTodos.forEach((storedTodo, index) => {
    const id = index + 1;
    if (id === idInNum) {
      storedTodos.splice(index, 1);
    }
  });
  localStorage.setItem('Todos', JSON.stringify(storedTodos));
};

// eslint-disable-next-line import/prefer-default-export
export { deleteTodoFromLS };