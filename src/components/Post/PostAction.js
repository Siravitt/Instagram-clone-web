export default function PostAction({ isLike, onLike, onUnLike }) {
  return (
    <>
      {isLike?.length !== 0 ? (
        <button onClick={onUnLike}>
          <i className="fa-solid fa-heart fa-lg text-red-400"></i>
        </button>
      ) : (
        <button onClick={onLike}>
          <i className="fa-regular fa-heart fa-lg"></i>
        </button>
      )}
      <button>
        <i className="fa-regular fa-comment fa-lg"></i>
      </button>
      <button>
        <i className="fa-solid fa-arrow-up-right-from-square"></i>
      </button>
    </>
  );
}
