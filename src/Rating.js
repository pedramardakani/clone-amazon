import React from "react";
import * as Icon from "react-feather";

export default function Rating(props) {
  const rows = [];
  let rating = props.rating;

  for (let i = 1; i < rating; i++) {
    rows.push(<Icon.Star color="#c9c956" key={i} />);
  }
  return <div>{rows}</div>;
  // let msg;
  // if (props.rating < 3.5) {
  //   msg = "smaal";
  // } else {
  //   msg = "biiig";
  // }
  // return <div>{msg}</div>;
  //   if ({ rating } < 2) {
  //     return (
  //       <div className="rating-stars">
  //         {" "}
  //         <Icon.Star color="#c9c956" />
  //       </div>
  //     );
  //   }
}
