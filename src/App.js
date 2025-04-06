import React from "react";
import UseRefExample from "./components/UseRefExample";
import UseReducerExample from "./components/UseReducerExample";
import UseLayoutEffectExample from "./components/UseLayoutEffectExample";
import ParentImperativeHandle from "./components/ParentImperativeHandle";

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>React Hooks Examples</h1>
      <UseRefExample />
      <hr />
      <UseReducerExample />
      <hr />
      <UseLayoutEffectExample />
      <hr />
      <ParentImperativeHandle />
    </div>
  );
}