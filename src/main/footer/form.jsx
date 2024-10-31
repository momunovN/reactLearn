import React from "react";
import "./footer.scss";
import "../main.scss";

const FooterForm = () => {
  return (
    <form action="" className="formFooter">
      <div className="form-content">
        <div className="form-title">
          <p>
            Subscribe to <br />
            our Newsletter
          </p>
        </div>
        <div className="form-btn-input">
          <input type="email" name="" id="" placeholder="Your Email Address" />
          <button>
                Subscribe
          </button>
        </div>
      </div>
    </form>
  );
};

export default FooterForm;
