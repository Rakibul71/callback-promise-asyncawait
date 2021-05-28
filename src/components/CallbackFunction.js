//any function that is pass an argument called a call back function.
// A call back function is that is to be execute another function has
// finished executing -hence the name 'call back
import React from "react";

const CallbackFunction = () => {
  //Every thing is okay
  //   const funA = () => {
  //     console.log(`Welcome FunA`);
  //   };
  //   const funB = () => {
  //     console.log(`Welcome FunB`);
  //   };
  //   funA();
  //   funB();
  //funA() will showing 1st then funB()

  //after using setTimeOut anonymous function
  //   const funA = () => {
  //     setTimeout(function () {
  //       console.log(`Welcome FunA`);
  //     }, 3000);
  //   };
  //   const funB = () => {
  //     console.log(`Welcome FunB`);
  //   };
  //   funA();
  //   funB();
  //in that situation funB() will call 1st and then funB() will call for that reason we need to use call back function

  //call back function
  const funA = (name1, name2) => {
    // setTimeout(function () {
    console.log(`Welcome ${name1}`);
    // }, 3000);
    name2();
  };
  const funB = () => {
    console.log(`Welcome FunB`);
  };
  funA("rakib", funB);
  //   funB();

  return <div></div>;
};

export default CallbackFunction;
