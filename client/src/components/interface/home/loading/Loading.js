import React from "react";
import Logo from "../../../../../src/images/logo-loading.png";
import "../../../../../src/sass/Loading.scss";

const Loading = () => {
  return (
    <div className="Logo_container">
      <img className="Logo_loading" src={Logo} alt="Loading..." />
    </div>
  );
};

export default Loading;