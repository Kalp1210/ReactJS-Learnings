import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
const Github = () => {
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/KALP1210")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);

  //   from hook

  const data = useLoaderData();
  return (
    <div className="text-center m-4 bg-orange-700 text-white text-xl p-2 rounded-lg ">
      Github Followers : {data.followers}
      <img src={data.avatar_url} alt="Git Pic" width={300} />
    </div>
  );
};

export default Github;

// this is best practice for feching a api in nav .
//what happens hi jab hum hover karte hai in github in nav tab h woh api call ho jata hai and is stored in cache
export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/KALP1210");
  return response.json();
};
