import React from "react";

const MainProfile = (props) => {
  const size = props.size.split(" ").map(size => "col-" + size).join(" ");

  return <div className={size} {...props} />;
}

export default MainProfile;
