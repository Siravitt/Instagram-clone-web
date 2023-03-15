import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { getPostById } from "../../apis/post-api";
import { createComment, getCommentByPostId } from "../../apis/comment-api";
import Comment from "./Comment";
import CommentHeader from "./CommentHeader";
import CommentInput from "./CommentInput";
import CommentTitle from "./CommentTitle";
import useAuth from "../../hooks/useAuth";

export default function CommentContainer() {
  const { userData } = useAuth();
  const { postId } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({});
  const [input, setInput] = useState("");
  const [comments, setComments] = useState([]);

  const onComment = (e) => setInput(e.target.value);

  const hldSubmitForm = async (e) => {
    try {
      e.preventDefault();
      const newComments = structuredClone(comments);
      await createComment({ postId: postId, comment: input });
      newComments.push({
        id: comments.length + 1,
        title: input,
        User: {
          userName: userData?.userName,
          profileImage: userData?.profileImage,
        },
      });
      setComments(newComments);
      setInput("");
    } catch (err) {
      console.log(err.data?.response);
      toast.error("Cannot comment on this post");
    }
  };

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await getPostById(postId);
        const result = await getCommentByPostId(postId);
        setComments(result.data.comments);
        setPost(res.data.post);
      } catch (err) {
        console.log(err.data?.response);
        navigate("/");
      }
    };
    fetchPost();
  }, [navigate, postId]);

  return (
    <>
      <CommentHeader />
      <CommentTitle
        name={post.User?.userName}
        title={post?.title}
        image={post.User?.profileImage}
      />
      {comments.map((el) => (
        <Comment
          key={el.id}
          title={el.title}
          name={el.User?.userName}
          image={el.User?.profileImage}
        />
      ))}
      <CommentInput
        value={input}
        onChange={onComment}
        onSubmit={hldSubmitForm}
      />
    </>
  );
}
