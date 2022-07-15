<script setup>
import uniqueUuid from "../helpers/uniqueUuid";

const uuid = uniqueUuid().getUUID();

const emits = defineEmits(["update:modelValue"]);

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: ""
  },
  label: {
    type: String,
    default: ""
  }
})
</script>

<template>
  <div class="app-input">
    <label :for="uuid">{{ label }}</label>
    <input
      v-bind="$attrs"
      :value="modelValue"
      :placeholder="label"
      class="app-input__input"
      :id="uuid"
      @input="emits('update:modelValue', $event.target.value)"
    >
  </div>
</template>

<style scoped>
.app-input {
  display: flex;
  flex-direction: column;
}

.app-input__input {
  padding: 1rem;
  border: 1px solid rgb(229, 231, 235);
  border-radius: 8px;
  font-size: 0.875rem;
  transition: all 0.3s ease-in-out;
  outline: none;
}

.app-input__input:focus {
  border-color: #2563eb;
}
</style>