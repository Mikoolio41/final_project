import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import UserPlan from "../containers/UserPlan";
import styles from "./styles/PlanCard.module.css";

function PlanCard() {
  // const [existingPlan, setExistingPlan] = useState();
  const [numberPlans, setNumberPlans] = useState();
  // const [selectedTab, setSelectedTab] = useState();
  const handleSelect = (e) => {
    console.log(e.target);
    e.target.setAttribute("aria-selected", "false");
    e.target.setAttribute("aria-disabled", "true");
  };

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
    return (
      <div>
        <Tabs>
          <TabList>
            {numberPlans.map((item, index) => {
              return <Tab key={index}>{item.target_id.toString()}</Tab>;
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

// if (numberTarget) {
//   return numberTarget.map((item, index) => {
//     return (
//       <div key={index} className="App">
//         <h1>MY PLANS</h1>
//         <Tabs>
//           <TabList>
//             <Tab>{item.target_id.toString()}</Tab>
//           </TabList>
//           <TabPanel>
//             <div className="panel-content">
//               <h2>
//                 <UserPlan user_id={item.user_id} />
//               </h2>
//             </div>
//           </TabPanel>
//         </Tabs>
//       </div>
//     );
//   });
// } else {
//   <div>Loading...</div>;
// }

// if (numberPlans) {
//   return numberPlans.map((item, index) => {
//     return (
//       <div>
//         <Tabs key={index}>
//           <TabList>
//             <Tab>{item.target_id.toString()}</Tab>
//           </TabList>
//           <TabPanel>
//             <div className={styles.panelContent}>
//               <div className={styles.containerPlan}>
//                 <UserPlan target_id={item.target_id} />
//               </div>
//             </div>
//           </TabPanel>
//         </Tabs>
//       </div>
//     );
//   });
// } else {
//   <div>Loading...</div>;
// }

// if (numberPlans) {
//   return (
//     <div>
//       <Tabs>
//         <TabList>
//           {numberPlans.map((item, index) => {
//             return <Tab>{item.target_id.toString()}</Tab>;
//           })}
//         </TabList>
//         <TabPanel>
//           <div className={styles.panelContent}>
//             <div className={styles.containerPlan}>
//               {numberPlans.map((item, index) => {
//                 return <UserPlan target_id={item.target_id} />;
//               })}
//             </div>
//           </div>
//         </TabPanel>
//       </Tabs>
//     </div>
//   );
// } else {
//   <div>Loading...</div>;
// }

// if (numberPlans) {
//   return numberPlans.map((item, index) => {
//     return (
//       <div key={index}>
//         <Tabs>
//           <TabList>
//             <Tab onClick={handleSelect}>{item.target_id.toString()}</Tab>
//           </TabList>
//           <TabPanel>
//             <div className={styles.panelContent}>
//               <div className={styles.containerPlan}>
//                 <UserPlan target_id={item.target_id} />
//               </div>
//             </div>
//           </TabPanel>
//         </Tabs>
//       </div>
//     );
//   });
// } else {
//   <div>Loading...</div>;
// }
