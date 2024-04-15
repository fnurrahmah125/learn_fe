<template>
  <div>
    <div v-if="showModal">
      <Modal :header="header" :text="text" theme="sale" @close="toggleModal" />
    </div>

    <teleport to="#modals" v-if="showModalTwo">
      <Modal @close="toggleModalTwo">
        <h1>Toggle Modal Two</h1>
      </Modal>
    </teleport>

    <h1>{{ title }}</h1>
    <input type="text" ref="name" />
    <button @click="handleClick">Click me</button>
    <button @click.shift="toggleModal">Open modal (alt)</button>
    <button @click="toggleModalTwo">Open modal</button>

    <TextSlot>
      <template v-slot:links>
        <a href="#">Sign up now</a>
        <a href="#">More info</a>
      </template>
      <h2>This is slot</h2>
    </TextSlot>
  </div>
</template>

<script>
import Modal from "./components/Modal.vue";
import TextSlot from "./components/TextSlot.vue";

export default {
  name: "App",
  components: { Modal, TextSlot },
  data() {
    return {
      title: "My First Vue App",
      header: "Sign up for the giveaway!",
      text: "Grab your ninja swag for half price!",
      showModal: false,
      showModalTwo: false,
    };
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name);
      this.$refs.name.classList.add("active");
      this.$refs.name.focus();
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo;
    },
  },
};
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
