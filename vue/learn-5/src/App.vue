<script setup></script>

<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link :to="{ name: 'About' }">About</router-link> |
      <router-link to="/jobs">Jobs</router-link>
    </div>
    <router-view></router-view>

    <button @click="redirect">Redirect</button>
    <button @click="back">Go back</button>
    <button @click="forward">Go forward</button>
  </div>
</template>

<script>
export default {
  methods: {
    redirect() {
      this.$router.push({ name: "Home" });
    },
    back() {
      this.$router.go(-1);
    },
    forward() {
      this.$router.go(1);
    },
  },
};
</script>

<style scoped>
button {
  margin: 0 10px;
  padding: 10px;
  border: none;
  border-radius: 4px;
}
a {
  padding: 10px;
  color: black;
  border-radius: 10px;
}
a.router-link-exact-active {
  color: white;
  background: crimson;
}
</style>
