import React from "react";
import "./style.css";
import Timelines from "./Timeline";
import UserMilestones from "./MilestonesUser";

const Milestones = (props) => {

  return (<>
    <div className="milestoneStyle">
      <UserMilestones trips={10} />
      <br></br>
    </div>
  </>);
}

export default Milestones;