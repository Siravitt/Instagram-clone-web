import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllPost } from "../../apis/post-api";
import Post from "./Post";

export default function PostContainer() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await getAllPost();
      setPosts(res.data.allPosts);
    };
    fetchPost();
  }, []);

  return (
    <div className="w-full h-full pt-2 flex flex-col gap-4 overflow-y-auto scrollbar-hide">
      {posts.length !== 0 ? (
        posts?.map((el) => (
          <Post
            key={el.id}
            id={el.id}
            image={el.image}
            title={el.title}
            user={el.User}
            likes={el.Likes}
          />
        ))
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center gap-2">
          <Link to="/search" className="text-[12px] px-4 py-1 rounded-lg border border-black bg-gray-200 hover:bg-gray-400 duration-200">Search</Link>
          <div className="text-[14px] pb-[200px]">Search friends</div>
        </div>
      )}
    </div>
  );
}
