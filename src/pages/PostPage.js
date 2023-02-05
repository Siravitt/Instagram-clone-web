import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useCurrentPage from "../hooks/useCurrentPage";
import useLoading from "../hooks/useLoading";
import { postImage } from "../apis/post-api";

export default function PostPage() {
  const { currentPage } = useCurrentPage();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const { startLoading, stopLoading } = useLoading();
  const navigate = useNavigate();

  const hldSubmitForm = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();
      if (!image) {
        return toast.error("Image is required");
      }
      if (title) {
        formData.append("title", title);
      }
      formData.append("image", image);
      startLoading();
      await postImage(formData);
      setTitle("");
      setImage(null);
      toast.success("Complete post");
      navigate("/", { state: { prevPath: "/post" } });
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data.message);
    } finally {
      stopLoading();
    }
  };

  return (
    <div className="w-[390px] h-screen mx-auto bg-white">
      <form onSubmit={hldSubmitForm}>
        <div className="w-full h-[45px] flex items-center justify-between px-4 border-b">
          <Link to="/">
            <i
              className="fa-solid fa-xmark fa-xl"
              onClick={() => currentPage(1)}
            ></i>
          </Link>
          <div className="text-[14px] font-bold">New post</div>
          <button className="text-[14px] font-bold text-blue-600">Post</button>
        </div>
        <div className="w-full h-[390px] flex items-center justify-center bg-gray-400 border-b">
          {image ? (
            <img
              src={URL.createObjectURL(image)}
              alt=""
              className="w-full h-[390px] object-cover"
            />
          ) : (
            <img
              src="https://cdn-icons-png.flaticon.com/512/3566/3566345.png"
              alt=""
              className="w-[200px] h-[200px] object-cover"
            />
          )}
        </div>
        <div className="w-full h-[20px] mt-4">
          <input
            id="selectPostImage"
            type="file"
            accept="image/png, image/jpeg"
            className="hidden"
            onChange={(e) => setImage(e.target.files[0])}
          ></input>
          <div className="w-full flex items-center justify-center">
            <button
              type="button"
              className="text-[12px] text-blue-600 font-bold"
              onClick={() => document.getElementById("selectPostImage").click()}
            >
              Select picture
            </button>
          </div>
          <div className="w-full px-4 mt-4 flex items-center gap-4">
            <div className="text-[14px]">Captions</div>
            <input
              type="text"
              placeholder="Caption..."
              value={title}
              className="w-full px-4 py-2 text-[14px] rounded-lg focus:outline-none"
              onChange={(e) => setTitle(e.target.value)}
            ></input>
          </div>
        </div>
      </form>
    </div>
  );
}
