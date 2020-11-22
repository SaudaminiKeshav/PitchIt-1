import React, { useEffect, useState } from "react";
import ReviewBubble from "../MainProfile/ReviewBubble";


const reviewStyle = {
  backgroundColor: "transparent"
}

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

const Reviews = (props) => {

  //console.log(props);

  const [reviews, setTrips] = useState([]);

  useEffect(() => {
    //console.log("reviews works");
    fetch("/api/completed")
      .then(data => data.json())
      .then(data => setTrips(data))
  }, [])

  return <>
    {reviews.map((each, index) => {
      let stars = parseInt(each.stars);
      for(let i=1; i < stars; i++) {
        document.getElementById(`star${i}`).removeAttribute("style");
      }
      return(
        <div style={reviewStyle}>
        <div style={bubbleStyle}>
        <h3 className="reviewTitle">{each.location}</h3>
        <span id="star1" className="fa fa-star checked" style={{ opacity: '0' }}></span>
        <span id="star2" className="fa fa-star checked" style={{ opacity: '0' }}></span>
        <span id="star3" className="fa fa-star checked" style={{ opacity: '0' }}></span>
        <span id="star4" className="fa fa-star checked" style={{ opacity: '0' }}></span>
        <span id="star5" className="fa fa-star checked" style={{ opacity: '0' }}></span>
        {/* <span className="dates">({each.date})</span> */}
      <p className="reviewText">{each.review}</p>
      </div>
      </div>
      )
    })}
    
  </>;
}

export default Reviews;