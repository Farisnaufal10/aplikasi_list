import { defineStore } from 'pinia'

export const useTodos = defineStore('todos', {
  state: () => ({
    todos: []
  }),

  getters: {
    pendingTodos(state) {
      return state.todos.filter(t => !t.isCompleted)
    },
    completedTodos(state) {
      return state.todos.filter(t => t.isCompleted)
    }
  },

  actions: {
    storeTodo(todo) {
      this.todos.push({
        id: Date.now(),
        text: todo.text,
        isCompleted: false
      })
    },

    toggleStatus(id) {
      const t = this.todos.find(item => item.id === id)
      if (t) t.isCompleted = !t.isCompleted
    }
  }
})
