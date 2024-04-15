const app = Vue.createApp({
  //   template: "<h2>I am the template</h2>",
  // data, functions
  data() {
    return {
      showText: true,
      title: "The final empire",
      author: "Brandon Sanderson",
      age: 45,
      x: 0,
      y: 0,
      books: [
        {
          title: "name the wind",
          author: "patrick rothfuss",
          img: "https://source.unsplash.com/100x100?book",
          isFav: true,
        },
        {
          title: "the way of kings",
          author: "brandon sanderson",
          img: "https://source.unsplash.com/100x100?books",
          isFav: false,
        },
        {
          title: "the final empire",
          author: "brandon sanderson",
          img: "https://source.unsplash.com/100x100?library",
          isFav: true,
        },
      ],
      url: "http://www.thenetninja.co.uk",
    };
  },
  methods: {
    changeAuthor() {
      this.author = "the author changed";
    },
    changeTitleWithParam(title) {
      this.title = title;
    },
    toggleShowText() {
      this.showText = !this.showText;
    },
    handleEvent(e, data) {
      console.log(e, e.type);

      if (data) {
        console.log(data);
      }
    },
    handleMouseMove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
    toggleFav(book) {
      book.isFav = !book.isFav;
    },
  },
  computed: {
    filteredBook() {
      return this.books.filter((book) => book.isFav);
    },
  },
});

app.mount("#app");
