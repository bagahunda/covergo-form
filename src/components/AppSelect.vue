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
  options: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="app-select">
    <label :for="uuid">{{ label }}</label>
    <select
      :id="uuid"
      class="app-select__select"
      :value="modelValue"
      v-bind="{
        ...$attrs,
        onChange: ($event) => {
          emits('update:modelValue', $event.target.value);
        },
      }"
    >
      <option
        v-for="option in options"
        :key="option"
        :value="option"
        :selected="option === modelValue"
      >
        {{ option }}
      </option>
    </select>
  </div>
</template>

<style scoped>
.app-select {
  display: flex;
  flex-direction: column;
}

.app-select__select {
  width: 100%;
  /* height: 52px; */
  padding: 1rem 1.5rem 1rem 1rem;
  vertical-align: middle;
  background: #fff
    url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E")
    no-repeat right 12px center;
  background-size: 8px 10px;
  border: 1px solid rgb(229, 231, 235);
  border-radius: 8px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.app-select__select:focus {
  border-color: #2563eb;
  outline: 0;
}

.app-select__select:focus::ms-value {
  color: #000;
  background: #fff;
}
.app-select__select::ms-expand {
  opacity: 0;
}
</style>
