import React from 'react';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import Activity from '../components/Activity';
import Buttons from '../components/Buttons';

const Activity2 = () => {
  return (
    <main>
      <Mouse />
      <div className="activity">
        <Navigation />
        <Logo />
        <Activity activityNumber={1} />
        <Buttons left={"/cours-collectifs"} right={"/show-animation"} />
      </div>
    </main>
  );
};

export default Activity2;