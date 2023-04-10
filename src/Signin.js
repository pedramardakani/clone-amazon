import React from "react";
import "./Signin.css";

export default function Signin() {
  return (
    <div className="container">
      <div className="signin">
        <div className="signin-information">
          <h1 className="signin-head">Sign in</h1>
          <div className="email-info">
            <div className="lables">Email or Phone number</div>
            <input type="email" maxLength={128} name="email"></input>
          </div>
          <div className="pass-info">
            <div className="lables">Password</div>
            <input type="password" maxLength={128}></input>
          </div>
          <button className="submit" type="submit">
            Continue
          </button>
        </div>
      </div>
      <hr />
      <div className="new-account">
        <div className="new-account-text">New to Madagascar?</div>
        <button className="new-account-button" type="submit">
          Create your Madagascar account
        </button>
      </div>
    </div>
  );
}
