<template>
  <div>
    <h1>Home</h1>
    <p ref="p">My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">Click me</button>
    <button @click="handleValue">Change Value</button>
    <button @click="age++">Add 1 to age</button>

    <br />
    <br />
    <br />

    <p>{{ textInput }}</p>
    <input type="text" v-model="textInput" />

    <br />
    <br />
    <br />

    <h2>Refs</h2>
    <p>My name is {{ ninjaOne.name2 }} and my age is {{ ninjaOne.age2 }}</p>
    <button @click="updateNinjaOne">Update ninja one</button>

    <br />
    <br />
    <br />

    <h2>Reactive</h2>
    <p>{{ ninjaTwo.name2 }} - {{ ninjaTwo.age2 }}</p>
    <button @click="updateNinjaTwo">Update ninja one</button>
  </div>
</template>

<script>
import { ref, reactive } from "vue";

export default {
  name: "Home",
  setup() {
    // data
    // methods
    // computed
    // lifecycle hooks

    console.log("setup");

    const p = ref(null);

    let name = ref("Mario");
    let age = ref(30);
    let textInput = ref("Lorem");

    const handleClick = () => {
      console.log("You clicked me", p, p.value);
      p.value.classList.add("test");
      p.value.textContent = "Hello, ninjas";
    };

    const handleValue = () => {
      name.value = "Luigi";
      age.value = 25;
    };

    const ninjaOne = ref({ name2: "Hana", age2: 22 });
    const ninjaTwo = reactive({ name2: "Luigi", age2: 32 });

    const updateNinjaOne = () => {
      ninjaOne.value.age2 = 40;
    };

    const updateNinjaTwo = () => {
      ninjaTwo.age2 = 35;
    };

    return {
      name,
      age,
      p,
      textInput,
      ninjaOne,
      ninjaTwo,
      handleClick,
      handleValue,
      updateNinjaOne,
      updateNinjaTwo,
    };
  },
};
</script>

<style scoped>
button {
  margin-right: 10px;
}
</style>
