/* eslint-disable no-unused-vars */
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from '../Component/Navbar';
import Button from '../Component/Button';
import Avatar from '../Component/Avatar';
import PlayPause from '../Component/PlayPause';
function App() {
  
const User = [{
  id : 1,
  url : 'https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=600',
  Name : "Mercedes",
  rounded : true
},
{
  id : 2,
  url : 'https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=600',
  Name : "Vesta",
  rounded : false
},
{
  id : 3,
   url : 'https://images.pexels.com/photos/119435/pexels-photo-119435.jpeg?auto=compress&cs=tinysrgb&w=600',
  Name : "Jeep",
  rounded : true
}
]


const Usercar = User.map(el=><Avatar key={el.id} src={el.url} Name={el.Name} rounded={el.rounded}/>)


 const handleParent = ()=>{
  console.log("Button Clicked!!!")
 }
  return (
    <div>
    <Navbar />
       <PlayPause />
      <Button text={"click Me!"} handleClick={handleParent}/>
      <>
      {Usercar}
      </>
    </div>
  )
}

export default App
