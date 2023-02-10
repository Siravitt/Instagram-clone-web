import useAuth from "../../hooks/useAuth";
import Post from "./Post";

export default function PostContainer() {
  const { posts } = useAuth();

  return (
    <div className="w-full h-full pt-2 flex flex-col gap-4 overflow-y-auto scrollbar-hide">
      {posts?.map((el) => (
        <Post
          key={el.id}
          id={el.id}
          image={el.image}
          title={el.title}
          user={el.User}
        />
      ))}
    </div>
  );
}
