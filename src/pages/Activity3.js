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
        <Buttons left={"/cours-prives"} right={"/ouverture-de-bal"} />
      </div>
    </main>
  );
};

export default Activity3;
