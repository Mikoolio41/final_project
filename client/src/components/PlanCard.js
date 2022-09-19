import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "../components/styles/PlanCard.css";
import UserPlan from "../containers/UserPlan";

function PlanCard() {
  // const [existingPlan, setExistingPlan] = useState();
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
    console.log(numberPlans);
  };

  // const displayPlans = async () => {
  //   const result = await fetch("/userplan", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       user_id: sessionStorage.getItem("userid"),
  //     }),
  //   });
  //   let json = await result.json();
  //   setExistingPlan(json);
  // console.log(existingPlan);
  // };

  useEffect(() => {
    numberOfPlans();
  }, []);

  // useEffect(() => {
  //   displayPlans();
  // }, []);

  if (numberPlans) {
    return numberPlans.map((item, index) => {
      return (
        <div>
          <Tabs key={index}>
            <TabList>
              <Tab>{item.target_id.toString()}</Tab>
            </TabList>
            <TabPanel>
              <div className="panel-content">
                <h2>
                  <UserPlan target_id={item.target_id} />
                </h2>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      );
    });
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
