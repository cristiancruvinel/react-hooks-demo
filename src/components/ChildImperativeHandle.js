import React, { useImperativeHandle, useRef, forwardRef } from "react";

const ChildImperativeHandle = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
  }));

  return <input ref={inputRef} type="text" placeholder="Usando useImperativeHandle" />;
});

export default ChildImperativeHandle;