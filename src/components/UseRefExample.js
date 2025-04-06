import React, { useRef } from "react";

export default function UseRefExample() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h2>useRef</h2>
      <input ref={inputRef} type="text" placeholder="Digite algo" />
      <button onClick={focusInput}>Focar input</button>
    </div>
  );
}