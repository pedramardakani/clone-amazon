import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

export default function Navigation() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light  navbar-design">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="nav-title">Madagascar</div>

        <div
          class="collapse navbar-collapse justify-content-end navbar-items"
          id="navbarTogglerDemo03"
        >
          <ul class="navbar-nav mt-2 mt-lg-0  ">
            <li class="nav-item active">
              <a class="nav-link" href="/">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                Cart
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="/">
                Sign in
              </a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0 d-flex">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            ></input>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}
