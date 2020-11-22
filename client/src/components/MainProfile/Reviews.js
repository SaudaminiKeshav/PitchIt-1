import React from "react";
import ReviewBubble from "../MainProfile/ReviewBubble";
// import Bubble from "../MainProfile/ReviewBubble";

const reviewStyle = {
  backgroundColor: "transparent"
}

const Reviews = (props) => {

  //console.log(props);

  return <>
    <div style={reviewStyle}>
      <ReviewBubble />
      <br />
      <ReviewBubble />
      <br />
      <ReviewBubble />
    </div>
  </>;
}

export default Reviews;