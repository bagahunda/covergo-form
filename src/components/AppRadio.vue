<script setup>
import uniqueUuid from "../helpers/uniqueUuid";

const uuid = uniqueUuid().getUUID();

const emits = defineEmits(["update:modelValue"]);

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
  info: {
    type: String,
    default: "",
  },
  value: {
    type: [String, Number],
    required: true,
  },
});
</script>

<template>
  <div class="app-radio">
    <input
      type="radio"
      :id="uuid"
      :checked="value === modelValue"
      :value="value"
      v-bind="$attrs"
      @change="emits('update:modelValue', value)"
    >
    <label :for="uuid">
      <span>{{ label }}</span>
      <span class="info">{{ info }}</span>
    </label>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
    </svg>
  </div>
</template>

<style scoped>

input {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  overflow: hidden;
  clip: rect(0 0 0 0);
}
.app-radio {
  width: 100%;
  height: 100%;
  position: relative;
}

label {
  display: flex;
  flex-direction: column;
  height: 70px;
  margin-bottom: 0;
  border: 1px solid rgb(243, 244, 246);
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  cursor: pointer;
}
svg {
  width: 1.25rem;
  height: 1.25rem;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  font-size: 0.825rem;
  font-weight: 500;
  color: rgb(37, 99, 235);
  display: none;
}

input:checked + label {
  box-shadow: rgb(255, 255, 255) 0px 0px 0px 0px, rgb(59, 130, 246) 0px 0px 0px 1px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  border-color: rgb(59, 130, 246);
}

input:checked ~ svg {
  display: block;
}

.info {
  margin-top: 0.25rem;
  font-size: 0.75rem;
  color: rgb(107, 114, 128);
}
</style>