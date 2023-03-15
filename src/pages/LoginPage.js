import LoginForm from "../components/Login/LoginForm";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-full bg-[#191919]">
      <div className="w-[390px] h-screen mx-auto bg-white flex flex-col items-center gap-10 overflow-y-auto scrollbar-hide">
        <div className="w-[175px] h-[50px] mt-12">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1600px-Instagram_logo.svg.png?20160616034027"
            alt="logo"
          />
        </div>
        <LoginForm />
        <div className="signup text-[12px] mt-20">
          <span>Don't have an account? </span>
          <button
            className="text-blue-600 font-bold"
            onClick={() => navigate("/register")}
          >
            Sign up
          </button>
        </div>
        <div className="mt-10 flex flex-col items-center gap-6">
          <div className="text-sm">Get the app.</div>
          <div className="w-[390px] h-[45px] flex justify-center gap-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png"
              alt="appStore"
              className="w-[136px] h-[40px]"
            />
            <img
              src="https://www.fcsok.org/wp-content/uploads/2020/04/get-it-on-google-play-badge.png"
              alt="googlePlay"
              className="w-[136px] h-[40px]"
            />
          </div>
        </div>
        <div className="flex flex-col text-[12px] text-gray-400">
          <div className="flex justify-center gap-4">
            <div>Meta</div>
            <div>About</div>
            <div>Blog</div>
            <div>Jops</div>
            <div>Help</div>
            <div>API</div>
            <div>Privacy</div>
          </div>
          <div className="flex justify-center gap-4">
            <div>Terms</div>
            <div>Top Accoucts</div>
            <div>Locations</div>
            <div>Instagram Lite</div>
          </div>
          <div className="flex justify-center gap-4">
            <div>Contact Uploading & Non-Users</div>
          </div>
          <div className="mt-6 mb-10 flex justify-center gap-4">
            <div>English</div>
            <div>&copy;2023 Instagram from Meta</div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
