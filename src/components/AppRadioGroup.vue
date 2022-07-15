<script setup>
import AppRadio from './AppRadio.vue';
const emits = defineEmits(["update:modelValue"]);

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: "",
  },
  options: {
    type: Array,
    required: true,
  },
  name: {
    type: String,
    required: true,
  }
});
</script>

<template>
  <div class="app-radio-group">
    <div class="app-radio-group__item" v-for="option in options" :key="option.value">
      <app-radio
        :label="option.name"
        :info="option.info"
        :value="option.value"
        :modelValue="modelValue"
        :name="name"
        @update:modelValue="emits('update:modelValue', $event)"
      />
    </div>
  </div>
</template>

<style scoped>
.app-radio-group {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
}

.app-radio-group__item {
  display: flex;
  width: calc((100% - 40px) / 3);
}
</style>