import React from "react";
import Amplify, { API } from "aws-amplify";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);

function App() {
  return (
    <div>
      <div>Azatyan hovhannes</div>
      <div>Andranik tsaturyan</div>
      <button>click me</button>
    </div>
  );
}

export default App;
