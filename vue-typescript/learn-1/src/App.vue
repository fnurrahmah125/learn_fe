<template>
  <div>
    <h1>App</h1>
    <p>{{ name }} - {{ age }}</p>
    <button @click="changeName('Zelda')">Change name</button>
    <button @click="changeAge(27)">Change age</button>
    <button @click="changeAge('30')">Change age</button>

    <hr />

    <HelloWorld />

    <hr />

    <Learn1 />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import Learn1 from "./components/Learn1.vue";

export default defineComponent({
  name: "App",
  components: { HelloWorld, Learn1 },
  data() {
    return {
      name: "Link",
      age: 25 as number | string,
    };
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
