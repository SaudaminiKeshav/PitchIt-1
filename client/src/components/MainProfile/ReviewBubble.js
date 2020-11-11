import React from "react";

const bubbleStyle = {
  backgroundColor: "whitesmoke",
  width: "90%",
  textAlign: "left",
  marginTop: "1%",
  marginBottom: "1%",
  marginLeft: "5%",
  padding: "1%",
  borderRadius: "5px 30px 5px 30px",
  boxShadow: "0px 0px 5px rgba(0, 0, 0, .6)",
  fontSize: "16px",
  fontWeight: "400"
}

const ReviewBubble = () => {

  return <>
  <div>
  <div style={ bubbleStyle }>
    <h3 className="reviewTitle">Location</h3>
    <span className="fa fa-star checked"></span>
    <span className="fa fa-star checked"></span>
    <span className="fa fa-star checked"></span>
    <span className="fa fa-star"></span>
    <span className="fa fa-star"></span>
    <p className="reviewText">This is the review of that trail that I wrote after my friends and I went on a backpacking trip. We saw wildlife and were in the forest. We had smores around a campfire and saw a bear from a safe distance. There were many miles of hiking and many lakes of swimming.</p>
  </div>
  </div>
  </>;
}

export default ReviewBubble;