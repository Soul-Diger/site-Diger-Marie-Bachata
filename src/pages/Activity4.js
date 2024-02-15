import React from "react";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import Activity from "../components/Activity";
import Buttons from "../components/Buttons";

const Activity4 = () => {
  return (
    <main>
      <Mouse />
      <div className="activity">
        <Navigation />
        <Logo />
        <Activity activityNumber={3} />
        <Buttons left={"/show-animation"} right={"/contact"} />
      </div>
    </main>
  );
};

export default Activity4;
