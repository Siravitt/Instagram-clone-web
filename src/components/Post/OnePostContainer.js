import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPostById } from "../../apis/post-api";
import Post from "./Post";

export default function OnePostContainer() {
  const { postId } = useParams();
  const [post, setPost] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOnePost = async () => {
      const res = await getPostById(postId);
      setPost(res.data.post);
    };
    fetchOnePost();
  }, [postId]);

  return (
    <>
      <div className="w-full h-[50px] px-4 border-b flex items-center justify-center relative">
        <button
          onClick={() => navigate(-1)}
          className="absolute top-[10px] left-[10px]"
        >
          <i className="fa-solid fa-chevron-left fa-xl"></i>
        </button>
        <div className="flex flex-col items-center justify-center">
          <div className="text-[12px]">{post.User?.userName}</div>
          <div className="font-bold text-[15px]">Posts</div>
        </div>
      </div>
      <Post
        id={postId}
        image={post.image}
        title={post.title}
        likes={post.Likes}
        user={post.User}
      />
    </>
  );
}
