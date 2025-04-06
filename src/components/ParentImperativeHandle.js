import React, { useRef } from "react";
import ChildImperativeHandle from "./ChildImperativeHandle";

export default function ParentImperativeHandle() {
  const childRef = useRef();

  return (
    <div>
      <h2>useImperativeHandle + forwardRef</h2>
      <ChildImperativeHandle ref={childRef} />
      <button onClick={() => childRef.current.focus()}>Focar input filho</button>
    </div>
  );
}