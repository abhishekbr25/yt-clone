import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/Inputbos";

export function Login() {
  return (
    <div className="h-screen bg-black flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-2xl flex flex-col items-center justify-evenly">
        <Heading value={"Login"} />
        <form className=" my-2">
          <InputBox placeholder={"Email"} />
          <InputBox placeholder={"Password"} />
        </form>
        <Button value={"Login"} />
        <p>
          Create a new Account
          <u>
            <a href="/signup">Signup</a>
          </u>
        </p>
      </div>
    </div>
  );
}
