import {Link} from "react-router-dom"
import RegisterForm from "../components/Register/RegisterForm";

export default function RegisterPage() {
  return (
    <div className="w-full h-full bg-[#191919]">
      <div className="w-[390px] h-screen mx-auto bg-white flex flex-col items-center gap-8">
        <div className="w-full h-[45px] border-b flex items-center justify-center">
          <div className="absolute top-2.5 left-[550px]">
            <Link to="/login">
              <i className="fa-solid fa-chevron-left fa-xl"></i>
            </Link>
          </div>
          <div className="font-bold">Register</div>
        </div>
        <RegisterForm />
      </div>
    </div>
  );
}
