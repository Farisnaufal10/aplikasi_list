<template>
  <h3>To-Do ⏳</h3>

  <!-- tambah task -->
  <form @submit.prevent="handleAddTask">
    <input 
      v-model="todo.text" 
      type="text" 
      placeholder="Tambah kegiatan..."
      class="input-bar"
    />
    <button :disabled="!todo.text" type="submit">Tambah Task</button>
  </form>

  <!-- list task -->
  <div>
    <ul>
      <li v-for="t in todosStore.pendingTodos" :key="t.id">
        <span>{{ t.text }}</span>
      </li>
    </ul>
  </div>

  <!-- TOAST -->
  <Toast ref="toastRef" />
</template>

<script>
import { useTodos } from '@/stores/todos'
import Toast from '@/components/Toast.vue'

export default {
  components: { Toast },

  data() {
    return {
      todo: { text: "", isCompleted: false },
      todosStore: useTodos()
    }
  },

  methods: {
    handleAddTask() {
      if (!this.todo.text) return

      this.todosStore.storeTodo(this.todo)

      // Tampilkan toast
      this.$refs.toastRef.show("Task Berhasil Ditambahkan")

      // Reset input
      this.todo.text = ""
    }
  }
}
</script>

<style>
.input-bar {
  width: 250px;
  padding: 8px 12px;
  margin-right: 6px;
  border: 1px solid #ccc;
  border-radius: 6px;
}
</style>
