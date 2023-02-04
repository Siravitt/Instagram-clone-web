import { useState } from "react";
import { toast } from "react-toastify";
import Input from "../Input";
import useAuth from "../../hooks/useAuth";
import validateLogin from "../../validators/validate-login";

export default function LoginForm() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({});
  const { login } = useAuth();

  const hldChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const hldSubmitForm = async (e) => {
    try {
      e.preventDefault();
      const result = validateLogin(input);
      if (result) {
        setError(result);
      }
      await login(input);
      toast.success("Success login");
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data.message);
    }
  };

  return (
    <div className="form w-[350px] h-[215px] bg-white flex flex-col items-center">
      <form onSubmit={hldSubmitForm}>
        <div className="w-[268px] h-[36px]">
          <Input
            type="text"
            placeholder="Email"
            name="email"
            value={input.email}
            onChange={hldChangeInput}
            error={error.email}
          />
        </div>
        <div className="w-[268px] h-[36px] my-4">
          <Input
            type="password"
            placeholder="Password"
            name="password"
            value={input.password}
            onChange={hldChangeInput}
            error={error.password}
          />
        </div>
        <div className="w-[268px] h-[32px] flex justify-center">
          <button className="w-full h-full mt-4 bg-blue-400 rounded-lg text-white font-bold">
            Log in
          </button>
        </div>
      </form>
      <div className="w-[268px] mt-10">
        <div className="inline-block w-[100px] h-[1px] mb-1 bg-gray-300"></div>
        <div className="inline-block text-[12px] text-gray-400 mx-6 font-bold">
          OR
        </div>
        <div className="inline-block w-[100px] h-[1px] mb-1 bg-gray-300"></div>
      </div>
      <div className="w-[268px] mt-5 flex justify-center">
        <div className="flex gap-2 text-[#385185] font-bold">
          <i className="fa-brands fa-square-facebook mt-0.5" />
          <span className="text-sm">Log in with Facebook</span>
        </div>
      </div>
      <div className="forgotPassword mt-5 text-[12px] text-[#385185]">
        Forgot password?
      </div>
    </div>
  );
}
