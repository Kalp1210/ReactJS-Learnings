import React, { useContext, useState } from "react";
import UserContext from "./UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div className="">
      <h5 className="text-center text-sm bg-red-900 text-white">
        Project05 A part
      </h5>
      <h2 className="text-center mt-8 text-lg bg-red-900 text-white">Login</h2>
      <div className="flex flex-col justify-center items-center">
        <div>
          <input
            className="bg-amber-900 text-white border-solid border-black m-2 rounded-md placeholder:text-white text-center "
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="username"
          />
          <input
            className="bg-amber-900 text-white border-solid border-black m-2 rounded-md placeholder:text-white text-center "
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          />
        </div>
        <button
          className="bg-amber-900 text-white border-solid border-black m-3 px-3 py-1 rounded-lg hover:bg-amber-700 transition ease-in-out duration-300"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Login;
