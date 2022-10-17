import React from "react";
import { Transition } from "@headlessui/react";

export interface AnimateTransitionProps {
  show: boolean;
  enter: string;
  enterFrom: string;
  enterTo: string;
  leave: string;
  leaveFrom: string;
  leaveTo: string;
  children: React.ReactNode;
}

const AnimateTransition = ({
  show,
  enter,
  enterFrom,
  enterTo,
  leave,
  leaveFrom,
  leaveTo,
  children
}: AnimateTransitionProps) => {
  return (
    <Transition
      show={false}
      enter={enter}
      enterFrom={enterFrom}
      enterTo={enterTo}
      leave={leave}
      leaveFrom={leaveFrom}
      leaveTo={leaveTo}
    >
      {children}
    </Transition>
  );
};

export default AnimateTransition;
