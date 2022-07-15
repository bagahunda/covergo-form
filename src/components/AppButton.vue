<script setup>
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  mode: {
    type: String
  }
})
</script>

<template>
  <button class="btn" :class="`btn--${mode}`" v-bind="$attrs">{{ label }}</button>
</template>

<style scoped>
.btn {
  appearance:none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 3rem;
  background-color: rgb(79, 70, 229);
  border: 1px solid rgb(79, 70, 229);
  color: white;
}

.btn--outline {
  background-color: transparent;
  color: rgb(79, 70, 229);
}

button:disabled {
  background-color: gray;
  color: white;
  border-color: gray;
  cursor: not-allowed;
}
</style>