const deleteTodoFromUI = (el) => {
  if (el.classList.contains('remove-btn')) {
    el.parentElement.parentElement.remove();
  }
};

// eslint-disable-next-line import/prefer-default-export
export { deleteTodoFromUI };