import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "../components/styles/PlanCard.css";
// import UserPlan from "../containers/UserPlan";
import Exercise from "./Exercise";

function PlanCard() {
  return (
    <div className="App">
      <h1>MY PLANS</h1>
      <Tabs>
        <TabList>
          <Tab>
            <p>Title 1</p>
          </Tab>
          <Tab>
            <p>Title 2</p>
          </Tab>
          <Tab>
            <p>Title 3</p>
          </Tab>
          <Tab>
            <p>Title 4</p>
          </Tab>
          <Tab>
            <p>Title 5</p>
          </Tab>
        </TabList>
        <TabPanel>
          <div className="panel-content">
            <h2>
              <Exercise />
            </h2>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <h2>
              <Exercise />
            </h2>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <h2>
              <Exercise />
            </h2>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <h2>
              <Exercise />
            </h2>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <h2>
              <Exercise />
            </h2>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default PlanCard;
