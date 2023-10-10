import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { PersonData } from "./personData";
import List from "./components/list";
import SmallPerson from "./components/person/smallPerson";

function App() {
  return (
    <div className="App">
      {/* {PersonData.map((p) => {
        return <LargePerson lpData={p} />;
      })}
      {PersonData.map((p) => {
        return <SmallPerson spData={p} />;
      })} */}

      <List data={PersonData} resourceName="smallPerson" comp={SmallPerson} />
    </div>
  );
}

export default App;
