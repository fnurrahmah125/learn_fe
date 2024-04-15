<template>
  <div>
    <h1>About Page</h1>
    <input type="text" v-model="search" />
    <p>
      <strong>search term - {{ search }}</strong>
    </p>
    <div v-for="name in matchingNames" :key="name">
      {{ name }}
    </div>

    <br />
    <br />

    <button @click="handleClick">Stop watching</button>
  </div>
</template>

<script>
import { computed, ref, watch, watchEffect } from "vue";

export default {
  name: "About",
  setup() {
    const search = ref("");
    const names = ref([
      "Mario",
      "Yoshi",
      "Luigi",
      "Toad",
      "Bowser",
      "Koopa",
      "Peach",
    ]);

    const stopWatch = watch(search, () => {
      console.log("watch function ran");
    });

    const stopEffect = watchEffect(() => {
      console.log("watchEffect function ran", search.value);
    });

    const matchingNames = computed(() => {
      return names.value.filter((name) =>
        name.toLowerCase().includes(search.value)
      );
    });

    const handleClick = () => {
      stopWatch();
      stopEffect();
    };

    return { search, names, matchingNames, handleClick };
  },
};
</script>
