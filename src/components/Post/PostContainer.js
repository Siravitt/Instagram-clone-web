import { useEffect, useState } from "react";
import { getAllPost } from "../../apis/post-api";
import Post from "./Post";

export default function PostContainer() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await getAllPost();
      setPosts(res.data.allPosts)
    }
    fetchPost()
  }, []);

  return (
    <div className="w-full h-full pt-2 flex flex-col gap-4 overflow-y-auto scrollbar-hide">
      {posts?.map((el) => (
        <Post
          key={el.id}
          id={el.id}
          image={el.image}
          title={el.title}
          user={el.User}
          likes={el.Likes}
        />
      ))}
    </div>
  );
}
