<script setup>
import FormIntro from "./FormIntro.vue";
import FormInfo from "./FormInfo.vue";
import FormSummary from "./FormSummary.vue";
import FormError from "./FormError.vue";

const props = defineProps({
  step: {
    type: String,
    required: true,
  },
});

const emits = defineEmits(["move", "error"]);

const activeComponent = {
  FormIntro: FormIntro,
  FormInfo: FormInfo,
  FormSummary: FormSummary,
  FormError: FormError,
};

const onMove = (e) => {
  emits("move", e);
};

</script>

<template>
  <div class="form">
    <keep-alive>
      <component
        :is="activeComponent[step]"
        @move="onMove"
        @error="emits('error')"
      />
    </keep-alive>
  </div>
</template>

<style>
fieldset {
  padding: 2rem;
  margin: 0;
  position: relative;
  min-width: 500px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  border: none;
}

legend {
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
}

.form-row + .form-row {
  margin-top: 1rem;
}

.form-row--flex {
  display: flex;
  width: 100%;
}

.form-row--flex-center {
  justify-content: center;
}

label {
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 0.25rem;
}

button + button {
  margin-left: 1rem;
}
</style>
