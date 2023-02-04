import Input from "../Input";

export default function RegisterForm() {
  return (
    <div className="w-[268px] flex flex-col">
      <form>
        <div className="flex flex-col gap-3">
          <div>
            <div className="text-sm">Username</div>
            <Input type="text" placeholder="Username" name="userName"/>
          </div>
          <div>
            <div className="text-sm">Email</div>
            <Input type="text" placeholder="Email" name="email"/>
          </div>
          <div>
            <div className="text-sm">First name</div>
            <Input type="text" placeholder="First name" name="firstName"/>
          </div>
          <div>
            <div className="text-sm">Last name</div>
            <Input type="text" placeholder="Last name" name="lastName"/>
          </div>
          <div>
            <div className="text-sm">Password</div>
            <Input type="password" placeholder="Password" name="password"/>
          </div>
          <div>
            <div className="text-sm">Confirm Password</div>
            <Input type="password" placeholder="Confirm password" name="confirmPassword"/>
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
