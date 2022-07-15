<template>
  <div class="summary">
    <h1>Summary</h1>
    <p>
      Name: {{ state.user.value.name }}
    </p>
    <p>
      Age: {{ state.user.value.age }}
    </p>
    <p>
      Where do you live: {{ state.user.value.country }}
    </p>
    <p>
      Package: {{ state.user.value.tariff }}
    </p>
    <p>
      Premium: {{ state.user.value.premium }}
    </p>
    <div class="form-row form-row--flex form-row--flex-center">
      <app-button label="Back" mode="outline" @click="emits('move', 1)" />
      <app-button label="Buy"></app-button>
    </div>
  </div>
</template>

<script setup>
import AppButton from "./AppButton.vue";
import useState from "../composables/useState";

const emits = defineEmits(["move"]);

const { state } = useState();
</script>

<style lang="scss" scoped>

</style>