import React from "react";

export default function Signin() {
  return (
    <div class="signin">
      <h1 class="signin-head">Sign in</h1>
      <div>
        <lable class="lables">Email or Phone number</lable>
        <input type="email" maxLength={128} name="email"></input>
      </div>
      <div>
        <lable class="lables">Password</lable>
        <input type="password" maxLength={128}></input>
      </div>
    </div>
  );
}
