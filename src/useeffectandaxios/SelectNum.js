import React, { useEffect, useState } from "react";
import axios from "axios";

const SelectNum = () => {
  const [num, setNum] = useState();
  const [name, setName] = useState();
  const [moves, setMoves] = useState();
  useEffect(() => {
    async function getData() {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
      console.log(res.data.name);
      setName(res.data.name);
      //   console.log(setName);
      setMoves(res.data.moves);
    }
    getData();
  });
  return (
    <>
      <h1>You Choose {num}</h1>
      <h1>Your choosen name is {name}</h1>
      <h3>Choosen Moves {moves}</h3>
      <select
        value={num}
        onChange={(event) => {
          setNum(event.target.value);
        }}
      >
        <option value="1">1</option>
        <option value="25">25</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      {/* <h2>The value is {num}</h2> */}
    </>
  );
};

export default SelectNum;
