import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <div className="section-title">
        <span className="fa fa-envelope" />
        <h2>اطلاعات تماس</h2>
      </div>
      <div className="contact-form">
        <form>
          <div className="form-header">
            <h1>
              <span className="fa fa-envelope" /> فرم تماس با من
            </h1>
            <p>کافیه موارد زیر رو پر کرده و روی دکمه ارسال کلیک کنید</p>
          </div>
          <div className="form-body">
            <div className="input-group">
              <input type="text" placeholder="نام و نام خانوادگی" />
              <span className="fa fa-user" />
            </div>
            <div className="input-group">
              <input type="email" placeholder="ایمیل" />
              <span className="fa fa-envelope" />
            </div>
            <div className="input-group">
              <textarea placeholder="متن جهت ارسال"></textarea>
              <span className="fa fa-comment" />
            </div>
            <button>ارسال</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
