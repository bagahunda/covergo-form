import { reactive, toRefs } from "vue";

const state = reactive({
  user: {
    name: "",
    age: "",
    country: "",
    tariff: "",
    premium: ""
  },
});

export default () => {
  const setState = (user) => {
    state.user = user;
  };

  return {
    state: toRefs(state),
    setState,
  };
};
