import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "../components/styles/PlanCard.css";
import UserPlan from "../containers/UserPlan";

function PlanCard() {
  const [numberTarget, setNumberTarget] = useState();

  const numberPlans = async () => {
    const result = await fetch("/number_target", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: sessionStorage.getItem("userid"),
      }),
    });
    let json = await result.json();
    setNumberTarget(json);
  };

  useEffect(() => {
    numberPlans();
  }, []);

  // return console.log(numberTarget);

  if (numberTarget) {
    return numberTarget.map((item, index) => {
      return (
        <div>
          <Tabs key={index}>
            <TabList>
              <Tab>{item.target_id.toString()}</Tab>
            </TabList>
            <TabPanel>
              <div className="panel-content">
                <h2>
                  <UserPlan user_id={item.user_id} />
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
