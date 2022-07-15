<script setup>
import AppButton from "./AppButton.vue";
const emits = defineEmits(["move"]);

const onClick = () => {
  emits('move', 1);
}
</script>

<template>
  <div>
    <h1>Oooops!</h1>
    <p>Your age is over our accepted limit. We are sorry but we can not insure you now.</p>
    <app-button label="Ok :(" @click="emits('move', 1)" />
  </div>
</template>

<style scoped>

</style>