import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', {
    state: () => ({
        todoList: [
            { name: "UAS PBO", isDone: false },
            { name: "UAS Jarkom", isDone: false },
            { name: "UAS PBK", isDone: false },
            { name: "UAS Elektronika", isDone: true },
            { name: "UAS Grafikom", isDone: true },
        ]
    }),
    getters: {
        showAll(state) {
            return state.todoList
        },
        completed(state) {
            return state.todoList.filter(item => item.isDone)
        },
        unCompleted(state) {
            return state.todoList.filter(item => !item.isDone)
        }
    },
    actions: {
        setAsDone(name) {
            const item = this.todoList.find(item => item.name === name)
                if (item) item.isDone = true
            },
        setAsUndone(name) {
            const item = this.todoList.find(item => item.name === name)
                 if (item) item.isDone = false
        },
        addTodo(name) {
            if (this.todoList.some(item => item.name === name)) {
                alert('Todo already exists')
                return
            }
            this.todoList.push({ name, isDone: false })
        },
        deleteTodo(name) {
            this.todoList = this.todoList.filter(item => item.name !== name)
        }
    }
 })
