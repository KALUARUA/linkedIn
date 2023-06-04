// import { useState } from "react";
import "./App.css";
import WorkExperience from "./components/workExperience";
import Seperator from "./components/seperator";
import NavBar from "./components/navbar";

function App() {
  const description: string =
    "Consolidating and making reusable various react UI components from two user interfaces. Working and planning with a team to build open source projects";

  return (
    <div>
      <NavBar />
      <div className="app">
        <div className="container">This is all test, to be deleted when pages are designed.</div>

        <div className="container">
          <WorkExperience
            title="Intern"
            employmentType="Internship"
            companyName="Outreachy"
            location="Remote"
            startDate={new Date(2022, 11, 5)}
            endDate={new Date(2023, 2, 3)}
            description={description}
            skills={["patternfly", "Redux"]}
          />
          <Seperator />
          <WorkExperience
            title="Intern"
            employmentType="Internship"
            companyName="Outreachy"
            location="Remote"
            startDate={new Date(2022, 11, 5)}
            endDate={new Date(2023, 2, 3)}
            description={description}
            skills={["patternfly", "Redux"]}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
