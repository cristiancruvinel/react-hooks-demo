import React, { useLayoutEffect, useRef } from "react";

export default function UseLayoutEffectExample() {
  const divRef = useRef(null);

  useLayoutEffect(() => {
    if (divRef.current) {
      divRef.current.style.backgroundColor = "lightblue";
    }
  }, []);

  return (
    <div ref={divRef} style={{ padding: "1em" }}>
      <h2>useLayoutEffect</h2>
      <p>Este componente usa useLayoutEffect para aplicar estilo.</p>
    </div>
  );
}