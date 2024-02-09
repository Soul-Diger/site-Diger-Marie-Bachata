import React from 'react';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import Buttons from '../components/Buttons';
import Activity from '../components/Activity';

const Activity1 = () => {
  return (
    <main>
      <Mouse />
      <div className="activity">
        <Navigation />
        <Logo />
        <Activity activityNumber={0} />
        <Buttons left={"/"} right={"/projet-2"}/>
      </div>
   </main>
  );
};

export default Activity1;