<template>
  <div>
    <h1>Learn</h1>
    <PostList v-if="showPosts" :posts="posts" />
    <button @click="showPosts = !showPosts">Toggle posts</button>
    <button @click="posts.pop()">Delete a post</button>
  </div>
</template>

<script>
import PostList from "../components/PostList.vue";
import { ref } from "vue";

export default {
  name: "Learn",
  components: { PostList },
  setup() {
    const posts = ref([
      {
        title: "Welcome to the blog",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis optio voluptates in quis ab ducimus tempore nesciunt magni consequatur totam.",
        id: 1,
      },
      { title: "Top 5 CSS tips", body: "Lorem ipsum", id: 2 },
    ]);

    const showPosts = ref(true);

    return { posts, showPosts };
  },
  mounted() {
    console.log("mounted using options api");
  },
};
</script>
