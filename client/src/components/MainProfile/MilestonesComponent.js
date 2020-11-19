import React from "react";
import "./style.css";
import MilestonesUser from "./MilestonesUser";
import MilestonesAvailable from "./MilestonesAvailable";

const Milestones = (props) => {

  return (<>
    <div className="milestoneStyle">
      <MilestonesUser trips={10} />
      <br></br>
      <MilestonesAvailable />
    </div>
  </>);
}

export default Milestones;