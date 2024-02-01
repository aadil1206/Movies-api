import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Screen1 = () => {
  const navigate = useNavigate();
  const [data1, setdata1] = useState([]);
  const fetchdata1 = async () => {
    const data = await axios.get("https://api.tvmaze.com/shows");
    console.log(data);
    setdata1(data.data);
  };
  useEffect(() => {
    fetchdata1();
  }, []);
  return (
    <div className="col-12 d-flex flex-wrap mt-3">
      {data1.map((item) => {
        return (
          <div
            key={item.id}
            className="col-sm-6 col-md-4 col-lg-3 px-3 d-flex flex-column align-items-center justify-content-center mb-4"
          >
            <img src={item.image.medium} alt="" className="col-10" />
            <h1>{item.name}</h1>
            <p>{item.language}</p>
            <a href={item.url} target="_blank">{item.url}</a>
            <div className="d-flex justify-content-center col-12">
              <p className="">Schedule:{item.schedule.days} at {item.schedule.time}</p>
              
            </div>
            <button
              onClick={() => navigate("/summary", { state: item })}
              className="p-2 c1"
            >
              Summary
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Screen1;
