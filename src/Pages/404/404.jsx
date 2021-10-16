import React from "react";
import { useHistory } from "react-router";

const NotFound = () => {
  const history = useHistory();
  const handleGoToHome = () => {
    history.push("/home");
  };

  return (
    <div className="section-notfound" data-aos="fade-down">
      <div className="notfound-content">
        <p className="w-100">
          We are sorry,the page you requested could not be found..
          <br /> Please go back to the home page
        </p>
        <button onClick={handleGoToHome} className="btn-home">
          Go To Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
