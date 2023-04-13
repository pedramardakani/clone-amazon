import React from "react";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import * as Icon from "react-feather";

export default function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="product-card">
            <img src={require("./coat.jpg")} class="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Cotton Coat</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <div className="rating-stars">
                <Icon.Star color="#c9c956" />
                <Icon.Star color="#c9c956" />
                <Icon.Star color="#c9c956" />
                <Icon.Star color="#c9c956" />
                <Icon.Star color="#c9c956" />
              </div>
              <a href="/" class="btn btn-primary">
                Buy now
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="product-card">
            <img src={require("./coat.jpg")} class="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Cotton Coat</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <div className="rating-stars">
                <Icon.Star color="#c9c956" />
                <Icon.Star color="#c9c956" />
                <Icon.Star color="#c9c956" />
                <Icon.Star color="#c9c956" />
                <Icon.Star color="#c9c956" />
              </div>
              <a href="/" class="btn btn-primary">
                Buy now
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="product-card">
            <img src={require("./coat.jpg")} class="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Cotton Coat</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <div className="rating-stars">
                <Icon.Star color="#c9c956" />
                <Icon.Star color="#c9c956" />
                <Icon.Star color="#c9c956" />
                <Icon.Star color="#c9c956" />
                <Icon.Star color="#c9c956" />
              </div>
              <a href="/" class="btn btn-primary">
                Buy now
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="product-card">
            <img src={require("./coat.jpg")} class="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Cotton Coat</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <div className="rating-stars">
                <Icon.Star color="#c9c956" />
                <Icon.Star color="#c9c956" />
                <Icon.Star color="#c9c956" />
                <Icon.Star color="#c9c956" />
                <Icon.Star color="#c9c956" />
              </div>
              <a href="/" class="btn btn-primary">
                Buy now
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="product-card">
            <img src={require("./coat.jpg")} class="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Cotton Coat</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <div className="rating-stars">
                <Icon.Star color="#c9c956" />
                <Icon.Star color="#c9c956" />
                <Icon.Star color="#c9c956" />
                <Icon.Star color="#c9c956" />
                <Icon.Star color="#c9c956" />
              </div>
              <a href="/" class="btn btn-primary">
                Buy now
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="product-card">
            <img src={require("./coat.jpg")} class="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Cotton Coat</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <div className="rating-stars">
                <Icon.Star color="#c9c956" />
                <Icon.Star color="#c9c956" />
                <Icon.Star color="#c9c956" />
                <Icon.Star color="#c9c956" />
                <Icon.Star color="#c9c956" />
              </div>
              <a href="/" class="btn btn-primary">
                Buy now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
