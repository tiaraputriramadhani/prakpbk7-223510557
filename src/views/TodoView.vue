<template>
    <div class="todo-container">
      <h1>Todo List</h1>
      <form @submit.prevent="todoStore.addTodo(newTodo)">
        <input type="text" v-model="newTodo" placeholder="Add new todo..." />
        <input type="submit" value="Add" />
      </form>
  
      <h3>My Todo List</h3>
  
      <div class="getters-button">
        <button @click="show = 'all'" :class="{ active: show === 'all' }">Show All</button>
        <button @click="show = 'completed'" :class="{ active: show === 'completed' }">Completed</button>
        <button @click="show = 'uncompleted'" :class="{ active: show === 'uncompleted' }">Uncompleted</button>
      </div>
  
      <ul>
        <li v-for="list in filteredTodos" :key="list.name">
          <span :class="{ done: list.isDone }">{{ list.name }}</span>
          <span>
            <button @click="list.isDone ? todoStore.setAsUndone(list.name) : todoStore.setAsDone(list.name)">
              {{ list.isDone ? 'Cancel' : 'Done' }}
            </button>
            <button @click="todoStore.deleteTodo(list.name)" class="delete-button">Delete</button>
          </span>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { useTodoStore } from '../stores/TodoStore'
  
  export default {
    setup() {
      const todoStore = useTodoStore()
      return { todoStore }
    },
    data() {
      return {
        newTodo: '',
        show: 'all'
      }
    },
    computed: {
      filteredTodos() {
        if (this.show === 'completed') {
          return this.todoStore.completed
        } else if (this.show === 'uncompleted') {
          return this.todoStore.unCompleted
        }
        return this.todoStore.showAll
      }
    }
  }
  </script>
  
  <style scoped>
  .todo-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande';
    padding: 2rem 1rem;
    background-color: #F8F9FA;
    min-height: 100vh;
  }
  
  h1 {
    color: #333;
    margin-top: 3rem;
    margin-bottom: 1rem;
  }
  
  form {
    width: 100%;
    max-width: 500px;
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
  }
  
  form input[type="text"] {
    flex-grow: 1;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
  }
  
  form input[type="submit"] {
    padding: 10px 20px;
    border: none;
    background-color: #007BFF;
    color: white;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  form input[type="submit"]:hover {
    background-color: #0056b3;
  }
  
  .getters-button {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 20px;
  }
  
  .getters-button button {
    padding: 10px 20px;
    border: 1px solid #DEE2E6;
    border-radius: 4px;
    cursor: pointer;
    background-color: white;
    color: #343A40;
    transition: background-color 0.3s ease, color 0.3s ease;
  }
  
  .getters-button button:hover,
  .getters-button button.active {
    background-color: #007BFF;
    color: white;
  }
  
  ul {
    list-style: none;
    padding: 0;
    width: 100%;
    max-width: 500px;
  }
  
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-bottom: 10px;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    background-color: white;
  }
  
  li:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  li span.done {
    text-decoration: line-through;
    color: #999;
  }
  
  button {
    padding: 5px 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  button:nth-child(1) {
    background-color: #28a745;
    color: white;
  }
  
  button:nth-child(1):hover {
    background-color: #218838;
  }
  
  button:nth-child(2) {
    background-color: #ffc107;
    color: black;
  }
  
  button:nth-child(2):hover {
    background-color: #e0a800;
  }
  
  .delete-button {
    background-color: #dc3545;
    color: white;
    margin-left: 10px;
  }
  
  .delete-button:hover {
    background-color: #c82333;
  }
  </style>
  