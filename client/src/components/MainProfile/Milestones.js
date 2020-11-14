import React from "react";
import "./style.css";
import Timelines from "./Milestones_Timeline";
import UserMilestones from "./Milestones_User";

const Milestones = (props) => {

  return (<>
    <div className="milestoneStyle">
      <UserMilestones />
      <Timelines trips={5}/>
    </div>
  </>);
}

export default Milestones;