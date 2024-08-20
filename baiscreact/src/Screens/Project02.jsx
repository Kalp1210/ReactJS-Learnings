import React, { useCallback, useEffect, useRef, useState } from "react";

const Project02 = () => {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) str += "0123456789";
    if (charAllow) str += "!@#$%^&*_-+={}[]";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, number, charAllow, setPassword]);

  const CopyPassword = useCallback(() => {
    passwordRef.current?.select();

    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, number, charAllow, passwordGenerator]);

  return (
    <div className="w-full max-w-md mx-auto shadow-lg rounded-lg px-4 my-8 text-orange-500 bg-slate-700">
      <p className="text-white text-center">Project02</p>
      <h1 className="text-xl text-center text-white">Password Generator</h1>
      <div className="flex shadow-md overflow-hidden rounded-lg mb-4 py-2">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3 rounded-l-xl"
          placeholder="password"
          readOnly
          ref={passwordRef}
        />
        <button
          className=" outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 rounded-r-xl"
          onClick={CopyPassword}
        >
          Copy
        </button>
      </div>

      <div className="flex text-sm gap-x-3 py-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label>length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={number}
            id="numberInput"
            onChange={() => {
              setNumber((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllow}
            id="characterInput"
            onChange={() => {
              setCharAllow((prev) => !prev);
            }}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
  );
};

export default Project02;
