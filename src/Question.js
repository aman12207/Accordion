import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = (props) => {
  const {title,info} = props.question;
  const [show,setShow] = useState(false);
  const handleClick = () =>{
    setShow(!show);
  }
  return <article className='question'>
    <header>
      <h4>{title}</h4>
      <button onClick={handleClick} className='btn'>{show? <AiOutlineMinus/>:<AiOutlinePlus/>}</button>
    </header>
    {show && <p>{info}</p>}
  </article>;
};

export default Question;
