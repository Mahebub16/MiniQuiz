import { useRef, useState } from 'react';
import './App.css'
import Questions from './components/Questions';
import Home from './components/Home';
const Quiz = () => {
  const [firstState,setfirstState] = useState(false)
  const Ref =  useRef();
  return (
   <div className='main'>
   {!firstState ? (<div className='App'>
    <label htmlFor="name">name </label><input type="text" name="name" className='form' ref={Ref} placeholder='Enter Your Name' required/>
    <label htmlFor="email: ">email </label><input type="email" name="email" className='form' placeholder='Enter Your Email' required/>
    <button type="submit" onClick={()=>setfirstState(true)} className='form-submit'>submit</button>
   </div>):<Home Ref={Ref.current.value}></Home>}
   </div>
  );
}
export default Quiz;