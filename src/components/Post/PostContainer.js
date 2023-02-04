import Post from "./Post";

export default function PostContainer() {
  return (
    <div className="w-full h-full flex flex-col gap-4 overflow-y-auto scrollbar-hide">
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}
