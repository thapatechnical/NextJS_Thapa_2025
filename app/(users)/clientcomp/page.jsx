"use client";

import { useState, useEffect } from "react";
import { Counter } from "./Counter";

const URL = "https://jsonplaceholder.typicode.com/posts";

const ClientComp = () => {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(URL);
      const data = await res.json();

      //   console.log(data);
      setPostData(data);

      return data;
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>Client Comp</h1>
      <button
        className="bg-amber-400 text-black p-5"
        onClick={() => alert("hii")}
      >
        Click Me
      </button>

      <Counter />

      <ul className="grid grid-cols-3 gap-5">
        {postData.map((curElem, index) => {
          return <li key={index}> {curElem.body} </li>;
        })}
      </ul>
    </>
  );
};

export default ClientComp;
