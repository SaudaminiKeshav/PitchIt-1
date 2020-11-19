import React from "react";
import "./style.css";
import Timelines from "./Milestones_Timeline";
import UserMilestones from "./UserMilestones";

const Milestones = (props) => {

  return (<>
    <div className="milestoneStyle">
      <UserMilestones trips={10} />
      <br></br>
      <Timelines />
    </div>
  </>);
}

export default Milestones;