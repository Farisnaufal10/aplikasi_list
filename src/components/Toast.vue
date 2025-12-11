<template>
  <div v-if="visible" class="toast">
    {{ message }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
      visible: false
    };
  },
  methods: {
    show(msg) {
      this.message = msg;
      this.visible = true;

      setTimeout(() => {
        this.visible = false;
      }, 2500);
    }
  }
}
</script>

<style>
.toast {
  position: fixed;
  bottom: 25px;
  right: 25px;
  background: #4caf50;
  color: #fff;
  padding: 12px 18px;
  border-radius: 8px;
  font-size: 14px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
  z-index: 9999;
  opacity: 0.95;
  transition: all 0.3s ease;
}
</style>
