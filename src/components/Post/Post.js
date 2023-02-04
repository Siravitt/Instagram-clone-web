export default function Post() {
  return (
    <div className="w-full h-full">
      <div className="h-[50px] flex items-center gap-2">
        <img
          src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
          alt=""
          className="w-[30px] h-[30px] object-cover inline-block rounded-full ml-2"
        />
        <div className="inline-block font-bold text-sm">flame</div>
      </div>
      <img
        src="https://plus.unsplash.com/premium_photo-1667734613410-aebe970c3f60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWluaW1hbCUyMHdhbGxwYXBlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
        alt=""
        className="w-full h-[300px] object-cover"
      />
      <div className="w-full h-[40px] flex gap-3 pl-2">
        <button>
          <i className="fa-regular fa-heart fa-lg"></i>
        </button>
        <button>
          <i className="fa-regular fa-comment fa-lg"></i>
        </button>
      </div>
      <div className="w-full h-[18px] flex items-center">
        <div className="flex ml-2">
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
        </div>
        <div className="flex gap-1 ml-2">
          <div className="text-[10px]">Liked by</div>
          <div className="text-[10px] font-bold">siravit</div>
          <div className="text-[10px]">and</div>
          <div className="text-[10px] font-bold">147 others</div>
        </div>
      </div>
      <div className="ml-2 flex gap-2 mt-1">
        <div className="text-[12px] font-bold">flame</div>
        <div className="text-[12px]">lorem ipsum.</div>
      </div>
      <div className="ml-2">
        <div className="text-[12px] text-gray-400">View all comment</div>
      </div>
    </div>
  );
}
