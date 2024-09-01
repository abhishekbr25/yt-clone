import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/Inputbos";

export function Signup() {
  return (
    <div className="h-screen bg-black flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-2xl flex flex-col items-center justify-evenly">
        <Heading value={"Signup"} />
        <form className=" my-2">
          <InputBox placeholder={"Username"} />
          <InputBox placeholder={"Email"} />
          <InputBox placeholder={"Password"} />
        </form>
        <Button value={"Signup"} />
        <p>
          Already have an account.
          <u>
            <a href="/login">Login</a>
          </u>
        </p>
      </div>
    </div>
  );
}
