import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import UserPlan from "../containers/UserPlan";
import styles from "./styles/PlanCard.module.css";

function PlanCard() {
  const [numberPlans, setNumberPlans] = useState();

  const numberOfPlans = async () => {
    const result = await fetch("/number_plans", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userid: sessionStorage.getItem("userid"),
      }),
    });
    let json = await result.json();
    setNumberPlans(json);
  };

  useEffect(() => {
    numberOfPlans();
  }, []);

  if (numberPlans) {
    console.log(numberPlans);
    return (
      <div>
        <Tabs>
          <TabList className={styles.cardList}>
            {numberPlans.map((item, index) => {
              return <Tab key={index}>{item.target}</Tab>;
            })}
          </TabList>
          <div className={styles.panelContent}>
            {numberPlans.map((item, index) => {
              return (
                <TabPanel className={styles.containerPlan} key={index}>
                  <UserPlan target_id={item.target_id} />
                </TabPanel>
              );
            })}
          </div>
        </Tabs>
      </div>
    );
  } else {
    <div>Loading...</div>;
  }
}

export default PlanCard;
