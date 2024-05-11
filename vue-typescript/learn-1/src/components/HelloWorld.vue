<template>
  <div>
    <h1>Hello World</h1>
    <p>{{ name }} - {{ age }}</p>
    <p>{{ title }} - {{ number }}</p>
    <button @click="changeName('Jane')">Change name</button>
    <button @click="changeAge(20)">Change age</button>
    <button @click="changeAge('21')">Change age</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from "vue";

export default defineComponent({
  name: "HelloWorld",
  components: {},
  setup() {
    const state = reactive({
      name: "Link",
      age: 18 as string | number,
    });

    // 🚨 state.name = 999 cannot change type
    state.age = "26";

    const title = ref("New Title");
    const number = ref<number | string>(25);

    number.value = "30";

    return { ...toRefs(state), title, number };
  },
  methods: {
    changeName(name: string) {
      this.name = name;
      return name;
    },
    changeAge(age: number | string) {
      this.age = age;
      return age;
    },
  },
});
</script>

<style scoped></style>
