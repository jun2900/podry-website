import React from "react";
import { Link } from "react-router-dom";

const Home = ({ data }) => {
  return (
    <div>
      {data.map((item, i) => {
        let url = `/${item.title.replace(/[^a-zA-Z]/g, "")}`;
        return (
          <div key={i}>
            <Link to={url}>
              <h1>{item.title}</h1>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
