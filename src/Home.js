import React from "react";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import * as Icon from "react-feather";
import data from "./data.js";

export default function Home() {
  return (
    <div className="container">
      <div className="row">
        {data.products.map((product) => (
          <div className="col">
            <div key={product._id} className="product-card">
              <img
                src={require(`${product.image}`)}
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="price-tag">{product.price}</div>
                <div className="rating-stars">
                  <Icon.Star color="#c9c956" />
                  <Icon.Star color="#c9c956" />
                  <Icon.Star color="#c9c956" />
                  <Icon.Star color="#c9c956" />
                  <Icon.Star color="#c9c956" />
                </div>
                <div className="buy-button">
                  <a href="/" className="btn btn-primary ">
                    Buy now
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
