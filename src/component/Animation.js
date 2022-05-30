import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Route, Routes, useLocation } from "react-router-dom";

function Animation(props) {
  const location = useLocation();
  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="page" timeout={1000}>
        <Routes>
          <Route></Route>
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default Animation;
