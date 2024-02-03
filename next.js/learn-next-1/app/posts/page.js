// Server component
import CardList from "../components/Posts/CardList";
import ViewUserButton from "../components/Posts/ViewUserButton";
import ViewUserIdButton from "../components/Posts/ViewUserIdButton";
import styles from "./posts.module.css";

const base_url = "https://jsonplaceholder.typicode.com/posts";

const Posts = async () => {
  const response = await fetch(base_url, {
    // cache: "no-store",
    next: { revalidate: 10 },
  });
  const posts = await response.json();

  return (
    <div className="p-3">
      <div className={styles.bgRed}>
        <h1 className="text-center py-3 text-3xl">Posts Page</h1>
      </div>
      <CardList classname="mx-auto p-4">
        <p className="text-center text-slate-400 font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <ViewUserButton />
      </CardList>
      <div className="flex flex-wrap gap-5 justify-center mt-7">
        {posts.map((post) => {
          return (
            <CardList
              classname="p-4 w-1/4 bg-green-600 rounded-md"
              key={post.id}
            >
              <h2 className="font-semibold text-xl uppercase mb-3">
                {post.title}
              </h2>
              <p className="font-light text-slate-200">{post.body}</p>
              <ViewUserIdButton userId={post.id} />
            </CardList>
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
