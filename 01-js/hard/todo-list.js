/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todos = [];
  }
  add(todo) {
    this.todos.push(todo);
  }
  remove(index) {
    this.todos.splice(index, 1);
  }
  update(index, updatedTodo) {
    console.log("BEFOR UPDATE: ", this.todos[index]);
    if (this.todos.length - 1 > index) { this.todos[index] = updatedTodo; }

    console.log("AFTER UPDATE: ", this.todos[index]);
    console.log("AFTER UPDATE TODO: ", this.todos);

  }
  getAll() {
    return this.todos;
  }
  get(index) {
    if (this.todos.length - 1 >= index) { return this.todos[index]; }
    else return null;
  }
  clear() {
    this.todos = [];
  }
}
module.exports = Todo;
