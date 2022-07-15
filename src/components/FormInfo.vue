<script setup>
import { reactive, ref, computed, onActivated, watch } from "vue";
import useState from "../composables/useState";
import AppInput from "./AppInput.vue";
import AppSelect from "./AppSelect.vue";
import AppRadioGroup from "./AppRadioGroup.vue";
import AppButton from "./AppButton.vue";

const emits = defineEmits(["move", "error"]);

const { state, setState } = useState();

const tariffOptions = [
  {
    name: "Standard",
    value: "Standard",
  },
  {
    name: "Safe",
    value: "Safe",
    info: "+50%",
  },
  {
    name: "Super Safe",
    value: "Super Safe",
    info: "+75%",
  },
];

const isFormReady = computed(() => {
  return !!(state.user.value.name && state.user.value.age && state.user.value.country && state.user.value.tariff);
});

const onNextClick = () => {
  if (+state.user.value.age < 100) {
    emits("move", 2);
  } else {
    emits("error");
  }
};

const premium = computed(() => {
  const rates = {
    "Hong Kong": 1,
    USA: 2,
    Australia: 3,
  };
  const multipliersMap = {
    Standard: 0,
    Safe: 0.5,
    "Super Safe": 0.75,
  };
  const base = state.user.value.age * 10 * rates[state.user.value.country];
  return `${base + base * multipliersMap[state.user.value.tariff]} ${activeCurrency.value}`;
});

const activeCurrency = computed(() => {
  const currenciesMap = {
    "Hong Kong": "HKD",
    USA: "USD",
    Australia: "AUD",
  };
  return currenciesMap[state.user.value.country];
});

const updateState = (field, value) => {
  const newState = {
    ...state.user.value,
    [field]: value
  };
  setState(newState);
}

watch(premium, (newVal) => {
  updateState("premium", newVal);
})
</script>

<template>
  <fieldset>
    <span>
      <legend>Tell us about yourself</legend>
      <div class="form-row">
        <app-input label="Name" @update:model-value="updateState('name', $event)" />
      </div>

      <div class="form-row">
        <app-input label="Age" @update:model-value="updateState('age', $event)" />
      </div>

      <div class="form-row">
        <app-select
          :options="['Hong Kong', 'USA', 'Australia']"
          label="Where do you live"
          @update:model-value="updateState('country', $event)"
        />
      </div>

      <div class="form-row">
        <app-radio-group
          @update:model-value="updateState('tariff', $event)"
          name="tariff"
          :options="tariffOptions"
        />
      </div>

      <div
        class="form-row form-row--flex form-row--flex-center"
        v-if="isFormReady"
      >
        Your premium is: {{ premium }}
      </div>

      <div class="form-row form-row--flex form-row--flex-center">
        <app-button label="Back" mode="outline" @click="emits('move', 0)" />
        <app-button
          label="Next"
          @click="onNextClick"
          :disabled="!isFormReady"
        />
      </div>
    </span>
  </fieldset>
</template>

<style scoped></style>
