import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="icon">
          <i className="fa-brands fa-instagram h"></i>
          <p>
            INSTAGRAM <br /> 10 573
          </p>
        </div>
        <div className="icon">
          <i className="fa-brands fa-facebook-f h"></i>
          <p>
            FACEBOOK <br /> 103 573
          </p>
        </div>

        <div className="icon">
          <i className="fa-brands fa-twitter h"></i>
          <p>
            TWITTER <br /> 103 573
          </p>
        </div>
        <div className="icon">
          <i className="fa-solid fa-heart h"></i>
          <p>
            BLOGLOVIN <br /> 103 573
          </p>
        </div>
        <div className="icon">
          <i className="fa-brands fa-pinterest h"></i>
          <p>
            PINTREST <br /> 103 573
          </p>
        </div>

        <div className="icon">
          <i className="fa-brands fa-google-plus-g h"></i>
          <p>
            GOOGLE + <br /> 103 573
          </p>
        </div>
      </div>
      <div className="footer-end">
        <p>{new Date().getFullYear()} IT Sharks 33</p>
      </div>
    </>
  );
};

export default Footer;
