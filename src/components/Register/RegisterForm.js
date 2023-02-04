import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Input from "../Input";
import validateRegister from "../../validators/validate-register";
import * as authApi from "../../apis/auth-api";

const initialInput = {
  userName: "",
  email: "",
  firstName: "",
  lastName: "",
  password: "",
  confirmPassword: "",
};

export default function RegisterForm() {
  const [input, setInput] = useState(initialInput);
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const hldChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const hldSubmitRegister = async (e) => {
    try {
      e.preventDefault();
      const result = validateRegister(input);
      if (result) {
        setError(result);
      } else {
        setError({});
        await authApi.register(input);
        setInput(initialInput);
        toast.success("Success register. Please login to continue");
        navigate("/login")
      }
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data.message);
    }
  };

  return (
    <div className="w-[268px] flex flex-col">
      <form onSubmit={hldSubmitRegister}>
        <div className="flex flex-col gap-3">
          <div>
            <div className="text-sm">Username</div>
            <Input
              type="text"
              placeholder="Username"
              name="userName"
              value={input.userName}
              onChange={hldChangeInput}
              error={error.userName}
            />
          </div>
          <div>
            <div className="text-sm">Email</div>
            <Input
              type="text"
              placeholder="Email"
              name="email"
              value={input.email}
              onChange={hldChangeInput}
              error={error.email}
            />
          </div>
          <div>
            <div className="text-sm">First name</div>
            <Input
              type="text"
              placeholder="First name"
              name="firstName"
              value={input.firstName}
              onChange={hldChangeInput}
              error={error.firstName}
            />
          </div>
          <div>
            <div className="text-sm">Last name</div>
            <Input
              type="text"
              placeholder="Last name"
              name="lastName"
              value={input.lastName}
              onChange={hldChangeInput}
              error={error.lastName}
            />
          </div>
          <div>
            <div className="text-sm">Password</div>
            <Input
              type="password"
              placeholder="Password"
              name="password"
              value={input.password}
              onChange={hldChangeInput}
              error={error.password}
            />
          </div>
          <div>
            <div className="text-sm">Confirm Password</div>
            <Input
              type="password"
              placeholder="Confirm password"
              name="confirmPassword"
              value={input.confirmPassword}
              onChange={hldChangeInput}
              error={error.confirmPassword}
            />
          </div>
          <div className="w-[268px] h-[32px] flex justify-center">
            <button className="w-full h-full mt-4 bg-blue-400 rounded-lg text-white font-bold">
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
