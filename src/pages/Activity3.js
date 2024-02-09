import React from "react";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import Activity from "../components/Activity";
import Buttons from "../components/Buttons";

const Activity3 = () => {
  return (
    <main>
      <Mouse />
      <div className="activity">
        <Navigation />
        <Logo />
        <Activity activityNumber={2} />
        <Buttons left={"/projet-2"} right={"/projet-4"} />
      </div>
    </main>
  );
};

export default Activity3;
