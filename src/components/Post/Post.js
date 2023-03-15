import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import socket from "../../configs/socket";
import useAuth from "../../hooks/useAuth";
import { createLike, deleteLike } from "../../apis/like-api";
import PostAction from "./PostAction";
import PostName from "./PostName";
import PostCaption from "./PostCaption";
import { deletePost } from "../../apis/post-api";

export default function Post({ id, title, image, user, likes }) {
  const [like, setLike] = useState([]);
  const [menu, setMenu] = useState(false);
  const { userData } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setLike(likes);
  }, [likes]);

  const onLike = async () => {
    try {
      const newLike = structuredClone(like);
      newLike.push("new like");
      await createLike({ postId: id });
      socket.emit("send_like", {
        to: user.id,
        from: userData?.userName,
        postId: id,
      });
      setLike(newLike);
    } catch (err) {
      console.log(err.response?.data);
    }
  };

  const onUnLike = async () => {
    try {
      const newLike = structuredClone(like);
      newLike.pop();
      await deleteLike(id);
      setLike(newLike);
    } catch (err) {
      console.log(err.response?.data);
    }
  };

  const isLike = like?.filter(
    (el) => el.userId === userData?.id || el === "new like"
  );

  const onDeletePost = async () => {
    try {
      await deletePost(userData?.id, id);
      if (location.pathname === "/") {
        navigate(0)
      } else {
        navigate("/");
      }
    } catch (err) {
      console.log(err.data?.response);
      toast.error("Cannot Delete");
    }
  };

  const openMenu = () => setMenu(true);

  return (
    <div className="w-full h-full">
      <div className="flex flex-col gap-4">
        <PostName friend={user} openMenu={openMenu} />
        <img src={image} alt="" className="w-full h-[400px] object-cover" />
      </div>
      <div className="w-full h-[40px] flex gap-3 pl-2">
        <PostAction isLike={isLike} onLike={onLike} onUnLike={onUnLike} />
      </div>
      <div className="w-full h-[18px] flex items-center">
        {/* <div className="flex ml-2">
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt=""
            className="object-cover rounded-full ring-[2px] ring-white w-[10px] h-[10px]"
          />
          <img
            src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt=""
            className="object-cover rounded-full ring-[2px] ring-white w-[10px] h-[10px]"
          />
          <img
            src="https://images.unsplash.com/photo-1671726203385-0013d6ec2ad7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt=""
            className="object-cover rounded-full ring-[2px] ring-white w-[10px] h-[10px]"
          />
        </div> */}
        <div className="flex gap-1 ml-2">
          <Link to={`/${id}/like`} className="text-[12px] font-bold">
            {like?.length} Like
          </Link>
          {/* <div className="text-[10px]">Liked by</div>
          <div className="text-[10px] font-bold">siravit</div>
          <div className="text-[10px]">and</div>
          <div className="text-[10px] font-bold">147 others</div> */}
        </div>
      </div>
      <PostCaption title={title} name={user?.userName} />
      <div className="ml-2">
        <Link to={`/comment/${id}`} className="text-[12px] text-gray-400">View all comments</Link>
      </div>
      {menu ? (
        <>
          <div
            className="w-[390px] h-screen mx-auto fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            onClick={() => setMenu(false)}
          ></div>
          <div className="w-[390px] h-[300px] fixed fadein bottom-0 transform overflow-hidden rounded-t-lg bg-white text-left shadow-xl transition-all">
            <div className="w-full h-[45px] mt-[25px]">
              <div className="w-full h-full">
                <button className="w-full h-full flex items-center gap-6">
                  <div className="pl-8">
                  <i className="fa-regular fa-star fa-lg"></i>
                  </div>
                  <div className="w-full h-full border-b text-[14px] flex items-center">
                    Add to favorite
                  </div>
                </button>
              </div>
              <div className="w-full h-full">
                {userData?.id === user.id ? (
                  <button
                    onClick={onDeletePost}
                    className="w-full h-full flex items-center gap-6 text-red-500"
                  >
                    <div className="pl-8">
                      <i className="fa-solid fa-trash-can fa-lg w-[20px]"></i>
                    </div>
                    <div className="w-full h-full border-b text-[14px] font-bold flex items-center">
                      Delete
                    </div>
                  </button>
                ) : (
                  <button className="w-full h-full flex items-center gap-6 text-red-500">
                    <div className="pl-8">
                      <i className="fa-solid fa-triangle-exclamation fa-lg"></i>
                    </div>
                    <div className="w-full h-full border-b text-[14px] font-bold flex items-center">
                      Report
                    </div>
                  </button>
                )}
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
