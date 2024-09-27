import { useState } from "react";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/Inputbos";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../utils/toast";
export function Signup() {
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    email: "",
    password: "",
  });
  // method 2 https://www.youtube.com/watch?v=SaEc7jLWvGY
  const handleChange = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target;
    const loginData = { ...loginInfo };
    loginData[name] = value;
    setLoginInfo(loginData);
    console.log(loginData);
    return;
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    const { username, email, password } = loginInfo;
    if (!username || !email || !password)
      return handleError("all fields are required");
    // console.log(loginInfo);
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginInfo),
      });
      const result = await response.json();
      console.log(result);
    } catch (error) {
      return handleError(error);
    }
  };
  return (
    <div className="h-screen bg-black flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-2xl flex flex-col items-center justify-evenly">
        <Heading value={"Signup"} />
        <form className=" my-2">
          <InputBox
            name={"username"}
            placeholder={"Username"}
            onChange={handleChange}
          />
          <InputBox
            name={"email"}
            placeholder={"Email"}
            onChange={handleChange}
          />
          <InputBox
            name={"password"}
            placeholder={"Password"}
            onChange={handleChange}
          />

          <Button type={"submit"} value={"Signup"} onClick={submitHandler} />
        </form>
        <p>
          Already have an account.
          <u>
            <a href="/login">Login</a>
          </u>
        </p>
      </div>

      <ToastContainer />
    </div>
  );
}
