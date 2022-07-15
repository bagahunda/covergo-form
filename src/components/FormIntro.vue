<script setup>
import AppButton from "./AppButton.vue";
const emits = defineEmits(["move"]);

const onClick = () => {
  emits('move', 1);
}
</script>

<template>
  <div>
    <h1>Hello there!</h1>
    <p>Let's buy some insuranse. It is gong to take only a few steps.</p>
    <app-button label="Start" @click="onClick" />
  </div>
</template>

<style scoped>

</style>