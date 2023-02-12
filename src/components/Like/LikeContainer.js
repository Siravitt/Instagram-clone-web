import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAllLike } from "../../apis/like-api";
import LikeList from "./LikeList";

export default function LikeContainer() {
  const { postId } = useParams();
  const [like, setLike] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLike = async () => {
      const res = await getAllLike(postId);
      setLike(res.data.allLike);
    };
    fetchLike();
  }, [postId]);

  return (
    <>
      <div className="w-full h-[50px] px-4 flex items-center justify-center relative">
        <button
          onClick={() => navigate(-1)}
          className="absolute top-15 left-[20px]"
        >
          <i className="fa-solid fa-chevron-left fa-xl"></i>
        </button>
        <div className="font-bold">Likes</div>
      </div>
      {like?.map((el) => (
        <LikeList
          key={el.id}
          id={el.User.id}
          name={el.User.userName}
          image={el.User.profileImage}
        />
      ))}
    </>
  );
}
