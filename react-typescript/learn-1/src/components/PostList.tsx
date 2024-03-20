import { useEffect, useState } from "react";
import { PostProps } from "../types/types";
import PostCard from "./PostCard";

const fetchData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const PostList = () => {
  const [data, setData] = useState<PostProps[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const getData = await fetchData();
        setData(getData);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    getData();
  }, []);

  return (
    <div className="postList">
      {data.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  );
};

export default PostList;
