import React from "react";

// my question :
// 1. 2s student roll no.
// 2.2s student name and age
// 3. 2s gender
const CallbackHell = () => {
  const getRollNo = () => {
    setTimeout(() => {
      console.log("Api getting roll No");
      let roll_no = [1, 2, 3, 4, 5];
      console.log(roll_no);
    }, 2000);
  };
  getRollNo();
  return <div>{/* <h1>Rakibull Islam</h1> */}</div>;
};

export default CallbackHell;
