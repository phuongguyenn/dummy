import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function Page1() {
  const [data, setData] = useState({});
  const [currentPage, setCurrentPage] = useState();

  const fetchData = (skip, limit) => {
    axios
      .get("https://dummyjson.com/products", {
        params: { skip: 0, limit: 10 },
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  // console.log(Array.from({ length: data.total / 10 }));

  return (
    <div>
      <ul>
        {data?.products?.map((d) => (
          <p key={d.id}>{d.title}</p>
        ))}
      </ul>
      <div>
        <div>
          {Array.from({ length: data.total / 10 }, (_, i) => i).map((i) => (
            <button onClick={() => fetchData((i - 1) * 20, 20)}>{i + 1}</button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page1;
