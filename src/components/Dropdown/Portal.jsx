// @flow
import * as React from "react";
import ReactDOM from "react-dom";
import { useEffect, useRef } from "react";

type PortalProps = {
  children?: React$Node,
};

export const Portal = ({ children }: PortalProps): React.Portal => {
  const rootRef = useRef(document.createElement("div"));

  useEffect(() => {
    // Look for existing target dom element to append to
    const parentElem = document.getElementById("dropdown-root");
    if (parentElem !== null) {
      parentElem.appendChild(rootRef.current);
    }
    return () => {
      rootRef.current.remove();
    };
  }, []);

  return ReactDOM.createPortal(children, rootRef.current);
};
