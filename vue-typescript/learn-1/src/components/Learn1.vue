<template>
  <div>
    <h1>Learn 1</h1>
    <header>
      <div>
        <button @click="handleClick('title')">order by title</button>
        <button @click="handleClick('salary')">order by salary</button>
        <button @click="handleClick('location')">order by location</button>
      </div>
    </header>
    <JobList :jobs="jobs" :order="order" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import OrderTerm from "../types/OrderTerm";
import JobList from "./JobList.vue";
import Job from "../types/Job";

export default defineComponent({
  name: "Learn1",
  components: { JobList },
  setup() {
    const jobs = ref<Job[]>([
      {
        title: "Title 4",
        location: "Location 4",
        salary: 10000,
        id: "4",
      },
      {
        title: "Title 1",
        location: "Location 1",
        salary: 4000,
        id: "1",
      },
      {
        title: "Title 2",
        location: "Location 2",
        salary: 25000,
        id: "2",
      },
      {
        title: "Title 3",
        location: "Location 3",
        salary: 3000,
        id: "3",
      },
    ]);

    const order = ref<OrderTerm>("title");

    const handleClick = (term: OrderTerm) => {
      order.value = term;
    };

    return { jobs, handleClick, order };
  },
});
</script>
