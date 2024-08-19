import React from "react";
import PropsCard from "./PropsCard";

const TailAndProps = () => {
  // for props card
  let myObj = {
    username: "kalp",
    age: 18,
  };

  let newArr = [1, 2, 3];

  return (
    <div>
      <p className="bg-green-500  w-60 text-black p-1 rounded-xl">
        TailAndProps
      </p>
      <br />
      {/* <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img
          class="w-24 h-24 rounded-full mx-auto"
          src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
          width="384"
          height="512"
        />
        <div class="pt-6 text-center space-y-4">
          <blockquote>
            <p class="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale on large
              teams. It’s easy to customize, adapts to any design, and the build
              size is tiny.”
            </p>
          </blockquote>
          <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">Sarah Dayan</div>
            <div class="text-slate-700 dark:text-slate-500">
              Staff Engineer, Algolia
            </div>
          </figcaption>
        </div>
      </figure> */}

      <PropsCard username="ChaiAurReact" someobj={newArr} />
    </div>
  );
};

export default TailAndProps;
