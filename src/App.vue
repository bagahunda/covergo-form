<script setup>
import FormWizard from "./components/FormWizard.vue";
import { ref } from "vue";

const step = ref(0);

const componentsMap = {
  0: 'FormIntro',
  1: 'FormInfo',
  2: 'FormSummary',
  3: 'FormError'
};

const onMove = (e) => {
  step.value = e;
}
</script>

<template>
  <div class="form-container">
    <FormWizard :step="componentsMap[step]" @move="onMove" @error="step='3'"/>
  </div>
</template>

<style>
html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 18px;
  min-height: 100vh;
  margin: 0;
  padding: 0;
}

.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
