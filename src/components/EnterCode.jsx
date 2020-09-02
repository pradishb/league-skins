import React from "react";
import CodeInput from "./CodeInput";

export default function EnterCode() {
  return (
    <div className="login-container">
      <p>Check your email for the code.</p>
      <div className="code-bar">
        <CodeInput />
        <CodeInput />
        <CodeInput />
        <CodeInput />
        <CodeInput />
        <CodeInput />
      </div>
    </div>
  );
}
