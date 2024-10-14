// AppWrap.jsx
import React from 'react';
import { NavigationDots, SocialMedia } from '../components';

const AppWrap = (Component, idName, classNames) => {
  return function HOC(props) {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />
        <div className="app__wrapper app__flex">
          <Component {...props} /> {/* Pass props to the wrapped component */}

          <div className="copyright">
            <p className="p-text">@2024 ADR.DEV</p>
            <p className="p-text">All rights reserved</p>
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };
};

export default AppWrap;
