
import { useState } from 'react';

export default function PlayPause() {
  const [play, setPlay] =  useState("paused");
  const [data, setData] =  useState("The state is paused");

  const handleClick = () => {
    if(play === "paused"){
        setPlay("playing");
        setData("The state is playing");
     }else{
        setPlay("paused");
        setData("The state is paused");
     }
  }

  return (
    <>
    <h1>{data}</h1>
    <button onClick={handleClick}>{play}</button>
    </>
  )
};
