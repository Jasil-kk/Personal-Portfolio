import React from "react";
import HashLoader from "react-spinners/HashLoader";
import "./Loading.css"

const Loading = () => {
  return (
    <div className="loading-body">
      <HashLoader color={"#7203a6"} loading={true} size={100} />
    </div>
  );
};

export default Loading;
